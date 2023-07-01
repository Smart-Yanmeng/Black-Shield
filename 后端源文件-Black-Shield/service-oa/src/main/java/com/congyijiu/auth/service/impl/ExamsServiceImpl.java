package com.congyijiu.auth.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.congyijiu.Dto.ExamsDto;
import com.congyijiu.Exams;
import com.congyijiu.Option;
import com.congyijiu.Questions;
import com.congyijiu.UserExams;
import com.congyijiu.auth.mapper.ExamsMapper;
import com.congyijiu.auth.service.ExamsService;
import com.congyijiu.auth.service.QuestionsService;
import com.congyijiu.auth.service.UserExamsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @author congyijiu
 * @create 2023-05-31-13:07
 */
@Service
public class ExamsServiceImpl extends ServiceImpl<ExamsMapper, Exams> implements ExamsService{

    @Autowired
    private QuestionsService questionsService;

    @Autowired
    private UserExamsService userExamsService;



    //开始考试
    @Override
    public ExamsDto startExam(Long userId, Long examId) {
        List<Questions> randomQuestions = questionsService.getRandomQuestions();
        ArrayList<UserExams> userExams = new ArrayList<>();
        //保存用户考试记录，并设置选项对象集合
        for (Questions randomQuestion : randomQuestions) {
            UserExams userExam = new UserExams();
            userExam.setExamId(examId);
            userExam.setQuestionId(randomQuestion.getId());
            userExams.add(userExam);
            //设置选项对象集合
            String optionstr = randomQuestion.getOptions();
            randomQuestion.setOptionList(this.getOptionByString(optionstr));
        }
        Exams exams = new Exams();
        exams.setId(examId);
        //设置考试状态：1-考试中
        exams.setStatus(1);
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String format = formatter.format(new Date());
        exams.setStartTime(format);
        this.updateById(exams);
        //保存考试记录
        userExamsService.saveBatch(userExams);
        ExamsDto examsDto = new ExamsDto();
        examsDto.setQuestions(randomQuestions);
        examsDto.setExamId(examId);
        return examsDto;
    }

    //提交考试
    @Override
    public Long submitExams(List<UserExams> userExams) {
        //获取当前考试id
        UserExams userExams1 = userExams.get(0);
        Long examId = userExams1.getExamId();
        LambdaQueryWrapper<UserExams> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(UserExams::getExamId, examId);
        //删除原先不完整的用户考试详情记录
        userExamsService.remove(wrapper);

        ArrayList<Long> qId = new ArrayList<>();
        for (UserExams userExam : userExams) {
            Long questionId = userExam.getQuestionId();
            qId.add(questionId);
        }

        //查询题目答案解析等
        List<Questions> questionsList = questionsService.listByIds(qId);

        //正确题目数量
        int correctNum = 0;
        //完善用户考试详情记录
        for (int i =0;i<userExams.size();i++) {
            UserExams userExam = userExams.get(i);
            Questions questions = questionsList.get(i);
            Integer answer = questions.getAnswer();
            Integer selected = userExam.getSelected();
            if (answer.equals(selected)) {
                userExam.setCorrect(1);
                correctNum++;
            }else {
                userExam.setCorrect(0);
            }
        }

        //保存完整的用户考试详情记录
        userExamsService.saveBatch(userExams);

        //完善考试记录
        Integer score = correctNum * 4;
        String result;
        if (score >=60){
            result = "通过";
        }else {
            result = "不通过";
        }
        Exams exams = new Exams();
        exams.setId(examId);
        exams.setScore(score);
        exams.setResult(result);
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String format = formatter.format(new Date());
        exams.setEndTime(format);
        //设置考试状态：2-考试结束
        exams.setStatus(2);
        //保存考试记录
        this.updateById(exams);
        return examId;
    }

    @Override
    public ExamsDto randomExam(Long userId) {
        List<Questions> randomQuestions = questionsService.getRandomQuestions();
        ExamsDto examsDto = new ExamsDto();
        examsDto.setQuestions(randomQuestions);
        Long examsId = getExams(userId,0);
        examsDto.setExamId(examsId);
        ArrayList<UserExams> userExams = new ArrayList<>();
        //保存用户考试记录，并设置选项对象集合
        for (Questions randomQuestion : randomQuestions) {
            UserExams userExam = new UserExams();
            userExam.setExamId(examsId);
            userExam.setQuestionId(randomQuestion.getId());
            userExams.add(userExam);
            //设置选项对象集合
            String optionstr = randomQuestion.getOptions();
            randomQuestion.setOptionList(this.getOptionByString(optionstr));
        }
        //保存考试记录
        userExamsService.saveBatch(userExams);
        return examsDto;
    }


    //生成考试记录
    @Override
    public Long getExams(Long userId,Integer type) {
        Exams exams = new Exams();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String format = formatter.format(new Date());
        exams.setStartTime(format);
        exams.setNumQuestions(15);
        exams.setType(type);
        exams.setUserId(userId);
        this.save(exams);
        return exams.getId();
    }

    public List<Option> getOptionByString(String optionstr){
        String[] options = optionstr.split(",");
        ArrayList<Option> optionList = new ArrayList<>();
        for (int i = 0; i < options.length; i++) {
            Option option = new Option();
            option.setId(i+1);
            String[] split = options[i].split(":");
            option.setLetter(split[0].trim());
            option.setName(split[1].trim());
            option.setChecked(false);
            optionList.add(option);
        }
        return optionList;
    }
}
