# React-Router-NestedRoutingApp

React Routerの`NavLink`と`isActive`を使用して、現在表示しているページのナビゲーションを切り替える練習用アプリです。

## 概要

現在表示しているページのナビゲーションを青色＋太字にし、それ以外のナビゲーションをグレーで表示します。

## 学習内容

* `NavLink`の基本的な使い方
* `isActive`によるアクティブ状態の判定
* Tailwind CSSによる条件付きスタイリング
* ナビゲーションのアクティブ状態の表示

## 使用技術

* React
* TypeScript
* React Router
* Tailwind CSS
* Vite

## ルーティング

| URL         | ページ      |
| ----------- | -------- |
| `/`         | Home     |
| `/profile`  | Profile  |
| `/settings` | Settings |

## アクティブ状態

現在表示しているページの`NavLink`には以下のクラスを適用します。

```text
text-blue-500
font-bold
```

## 非アクティブ状態

現在表示していないページの`NavLink`には以下のクラスを適用します。

```text
text-gray-500
```

## 実装例

```tsx
<NavLink
  to="/profile"
  className={({ isActive }) =>
    isActive
      ? "text-blue-500 font-bold"
      : "text-gray-500"
  }
>
  Profile
</NavLink>
```

`isActive`が`true`の場合はアクティブ状態、`false`の場合は非アクティブ状態としてスタイルを切り替えます。

## ディレクトリ構成

```text
src/
├── components/
│   └── Navigation.tsx
├── pages/
│   ├── Home.tsx
│   ├── Profile.tsx
│   └── Settings.tsx
├── App.tsx
├── App.css
└── main.tsx
```

## 起動方法

```bash
npm install
```

```bash
npm run dev
```

## まとめ

`NavLink`の`isActive`を使用することで、現在表示しているページのナビゲーションだけスタイルを変更できます。
