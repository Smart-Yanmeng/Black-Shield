package com.congyijiu;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * @author congyijiu
 * @create 2023-06-20-16:17
 */
@Data
@ApiModel(value="选项对象", description="")
public class Option {

    @ApiModelProperty(value = "选项id")
    private Integer id;

    @ApiModelProperty(value = "选项名称")
    private String name;

    @ApiModelProperty(value = "选项是否被选中")
    private boolean checked;

    @ApiModelProperty(value = "选项字母")
    private String letter;
}
