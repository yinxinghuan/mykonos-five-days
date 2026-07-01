# Technical

## 1. 技术栈

- 游戏：Mykonos Five Days
- 类型：other
- 简述：雅典转机偶遇 4 年没见的 Yale 同学, 一时兴起退票去 Mykonos 待 5 天。28 岁建筑师 Lena 与摄影师 Sam, 两个华裔美国人, 都单身, 都不打算谈恋爱——至少这趟之前是。5 个场景 (抵达/沙滩/餐厅/风车午夜/码头晨), 每场 2 选, 4 结局看接近度。极少对白, 张力在 gaze 与距离。FMV v2 第 2 作。
- 框架 / 语言 / 构建：React, TypeScript, Vite, Less
- 渲染方式：Canvas/WebGL
- 依赖摘录：@types/react@^18.2.0, @types/react-dom@^18.2.0, @vitejs/plugin-react@^4.2.1, less@^4.2.0, react@^18.2.0, react-dom@^18.2.0, typescript@^5.3.3, vite@^5.1.0
- 平台元信息：meta.title=Mykonos Five Days；cover_url=/poster.png；category=other；uuid=9abf09b9-e939-44ad-9a6c-e510c5ff44b5

## 2. 目录结构

- `index.html`：Vite/浏览器入口，挂载根节点和基础 meta。
- `package.json`：定义 npm 脚本、依赖和工程名称。
- `vite.config.ts`：配置构建、插件和相对路径 base。
- `meta.json`：平台发布元信息，包含标题和封面。
- `src/App.tsx`：React 组件和交互界面。
- `src/main.tsx`：React 组件和交互界面。
- `src/index.less`：视觉样式、布局、动画和响应式规则。
- `src/vite-env.d.ts`：游戏源码模块。
- `src/game-id.ts`：游戏源码模块。
- `src/Bidding/i18n.ts`：中英文或多语言文案。
- `src/Bidding/BiddingEngine.tsx`：React 组件和交互界面。
- `src/Bidding/content.ts`：游戏源码模块。
- `src/Bidding/types.ts`：游戏源码模块。
- `src/Bidding/BiddingEngine.less`：视觉样式、布局、动画和响应式规则。
- `src/Bidding/primitives/VideoStage.tsx`：React 组件和交互界面。
- `src/Bidding/primitives/VideoStage.less`：视觉样式、布局、动画和响应式规则。
- `src/Bidding/primitives/ChoiceList.less`：视觉样式、布局、动画和响应式规则。
- `src/Bidding/primitives/ExamineCard.less`：视觉样式、布局、动画和响应式规则。

关键源码模块：

- `src/App.tsx`
- `src/main.tsx`
- `src/index.less`
- `src/vite-env.d.ts`
- `src/game-id.ts`
- `src/Bidding/i18n.ts`
- `src/Bidding/BiddingEngine.tsx`
- `src/Bidding/content.ts`
- `src/Bidding/types.ts`
- `src/Bidding/BiddingEngine.less`
- `src/Bidding/primitives/VideoStage.tsx`
- `src/Bidding/primitives/VideoStage.less`
- `src/Bidding/primitives/ChoiceList.less`
- `src/Bidding/primitives/ExamineCard.less`
- `src/Bidding/primitives/EpilogueSequence.less`
- `src/Bidding/primitives/PivotSequence.tsx`
- `src/Bidding/primitives/ExamineRow.less`
- `src/Bidding/primitives/HotspotPin.less`
- `src/Bidding/primitives/ExamineCard.tsx`
- `src/Bidding/primitives/ExamineRow.tsx`
- `src/Bidding/primitives/ChoiceList.tsx`
- `src/Bidding/primitives/HotspotPin.tsx`
- `src/Bidding/primitives/Prologue.less`
- `src/Bidding/primitives/SceneTitle.tsx`

## 3. 核心模块

- 状态管理与节奏：通过 React 状态与定时器处理倒计时、阶段推进或生成节奏。
- 渲染方式：Canvas/WebGL，样式由 CSS/Less 和组件结构共同完成。
- 碰撞 / 更新：源码包含命中、距离、边界或重叠判断，结果会影响得分、生命或阶段。
- 音频：未发现独立音频模块，当前以视觉和文案反馈为主。
- 多语言：包含 i18n / locale 检测或 `t()` 文案函数。
- 存储：使用 localStorage、useGameSave 或 persist 保存分数、收藏、墙数据或本地状态。
- Aigram 运行时：接入 `@shared/runtime` 或平台桥接能力，用于用户、资料页、分享、通知或平台 API。
- 排行榜：源码包含分数提交、排名或榜单展示逻辑。

## 4. 扩展点

- 改玩法参数：优先查找 `src/` 内大写常量、hooks、主组件顶部配置或关卡数组。
- 换素材：替换 `public/`、`src/img/` 或源码 import 的图片/音频文件，并保持相对路径。
- 调视觉：修改主样式文件中的颜色、间距、动画时长、网格尺寸和响应式规则。
- 改文案：修改 i18n 字典、组件内标题按钮文案，保持 zh/en 同步。
- 加平台能力：在已有 `@shared/runtime`、useGameSave、排行榜、墙或通知调用附近扩展，避免另起一套存储。
