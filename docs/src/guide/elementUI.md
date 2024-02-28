#### 日期时间选择器-可选择时间不能早于当前时间

```html
<el-date-picker
    type="datetimerange"
    :picker-options="pickerOption"
/>

<script>
export default {
    data: {
        return {
        	pickerOption:{
                disabledDate:(time)=> {
                    return Date.now() -3600 * 1000 * 24 > time.getTime();
                }
            }
        }
    }
}
</script>
```



#### 日期时间选择器-可选择时间必须大于等于活动结束时间，否则不可选

```html
<el-date-picker
    type="datetimerange"
    :picker-options="pickerOption"
/>

<script>
export default {
    data: {
        return {
        	acTime: [],
        	pickerOption:{
                disabledDate:(time)=> {
                    if (!this.configForm.gg) {
                        return false
                    }
                    // 解决生成时间不为零点问题
                    let _t =  new Date(new Date(`${this.acTime[1]} 00:00:00`)).getTime();
                    return time.getTime() < _t;
                }
            }
        }
    }
}
</script>
```



