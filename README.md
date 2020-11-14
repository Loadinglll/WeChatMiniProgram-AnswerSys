微信小程序——简易在线答题系统
===

    #一、	目的和要求
    1.	练习并掌握微信小程序原生组件的使用；
    2.	理解并掌握微信小程序的事件绑定与处理，掌握视图层传递数据到逻辑层的方式；
    3.	理解微信小程序的生命周期及生命周期函数。

#二、	基本功能
1.	选择答题所用题库（使用picker或 picker-view 实现）
2.	在线答题
2.1 题型为单选题或多选题
2.2 在页面展示题干和各选项（使用radio 以列表渲染的方式展示各选项）
2.3 点击确认或提交按钮后能实时判定正确与否
2.4 点击下一题按钮加载下一道题重新进入2.2
2.5 循环以上步骤，直到完成最后一题测试
2.6 能统计答题数和正确率
	*在实现基本功能的基础上，同学们可自行扩展功能，视完成情况和效果适当加分

#三、其它
	1. 页面应尽可能美观，操作便利
2. 由于尚未学习网络访问之API，此次作业可以将题库数据存储到app.js定义的全局变量中
