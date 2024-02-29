### 规则

| 模块   | 说明                                                       |
| ------ | ---------------------------------------------------------- |
| 菜单栏 | 如果菜单组下只有一个菜单页面会展示，该菜单页面会取代菜单组 |



### 滚动条样式

`浅色`

```less
.wrap {
  &::-webkit-scrollbar {
        /* 滚动条宽度和高度 */
        width: 8px;
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        background: #e9e9e9;
    }

    &::-webkit-scrollbar-track-piece {
        border-radius: 10px;
        /*滚动条里面轨道*/
        background-color: #fff;
    }
}
```

`深色`

```less
.wrap {
  &::-webkit-scrollbar {
        /* 滚动条宽度和高度 */
        width: 6px;
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        background: #cccccc;
    }

    &::-webkit-scrollbar-track-piece {
        border-radius: 10px;
        /*滚动条里面轨道*/
        background-color: #fff;
    }
}
```

