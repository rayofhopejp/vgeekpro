# ぶいぎーく！公式サイトソースリポジトリ

## 初期設定

### `corepack`の準備

このサイトは`corepack`を使用して環境を統一しております。  
ドキュメント執筆時点のNode.JSでは追加インストールは不要なはずですが、以下のコードにて手動でインストールできます。  
インストール済みの場合(`corepack --version`)が出来る場合は「インストールしたら」まで飛ばしてください。

**※古すぎるバージョンには同梱されていませんが、そもそも互換性がないと思われるので問題ありません。**  
**※将来的に`corepack`はNode.JSと分離される予定です。分離後は追加のインストールが必要になるだけで、廃止されるわけではありません。**

```bash
# 既存のグローバルインストール済みのパッケージマネージャーの削除
# npmはそのままインストールしていてください。
npm uninstall -g pnpm yarn
# corepack のインストール
# corepack 本体をインストールします。
npm install -g corepack
```

`corepack`をインストールしたら

以下のコマンドで`corepack`経由でパッケージマネージャーを使用出来るようになります。

```bash
# corepack の有効化
corepack enable
# [省略可] npmコマンドへの明示的な適用を行う場合は次も実行
corepack enable npm
# [省略可] corepack でパッケージマネージャーを準備
## npm [適用した場合のみ]
corepack prepare npm@latest --activate
## yarn
corepack prepare yarn@latest --activate
## pnpm
corepack prepare pnpm@latest --activate
```

※`corepack`を使用する代わりに`pnpm`をグローバルにインストールして使用することも出来ます。

### ライブラリのインストール

まず、依存しているライブラリをインストールします。

```bash
pnpm install --frozen-lockfile
```

この時点でエラーが発生する場合はソースに何らかの問題があるかもしれません。  
※`npm`や`yarn`を使用してパッケージをインストールすると予期しない不具合が発生したり、パッケージマネージャーがエラーで動作しないことがあります。必ず`pnpm`をお使いください。

### 設定ファイルの変更

必要に応じてプロジェクトのルートにある`.env.example`を`.env`としてコピーし、設定を変更してください。  
設定は [設定について](/docs/configurations/index.md) をご確認ください。

## 開発サーバー

`http://localhost:3000`で開発サーバーを起動させるには以下のコマンドを打ちます。

```bash
pnpm run dev
```

基本的に自動再読込されますが、開発サーバーはSSGではありませんので、本番環境用のデータをPreviewしてください。  
本番環境は次のセクションにあります。

## 本番環境

本番環境用にサイトをビルドするには以下のコマンドを実行します

```bash
pnpm run generate
# 代わりに以下のスクリプトを使用出来ます
./build.sh
```

ビルドが完了したら次のコマンドで動作検証を行い、正常に動作する場合にコードを提出しましょう

```bash
pnpm run preview
```

## オススメのIDE

本プロジェクトでは次のIDE/コードエディタを推奨しています。

- IntelliJ IDEA Ultimate (JetBrains s.r.o.)  
  Javaをメインに各言語に対応する万能IDEです。  
  以下のプラグインをインストールすると快適に開発出来ます。
	- JavaScript and TypeScript
	- Vue.js
	- Node.js
- WebStorm (JetBrains s.r.o.)  
  JetBrains IDEsのHTML+JavaScriptなどのWebとNodeに最適化されたIDEです。
- PhpStorm (JetBrains s.r.o.)  
  PHPに対応していることを除いてWebStormと同一です。
- Visual Studio Code (Microsoft Corporation)  
  Visual Studioファミリーの製品で高機能なコードエディタです。  
  必ずインストール版をご利用ください。Web版ではEditorConfigが動作しないようです。  
  以下の拡張機能をインストールすると快適に開発できます。
	- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
	- [GitLens — Supercharge Git in VS Code](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
	- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Eclipse Theia (Eclipse Foundation)](https://theia-ide.org/)  
  Visual Studio Codeと互換性のあるコードエディタです。  
  主にクラウドベースIDEへの採用実績があります。  
  拡張機能は(EditorConfig以外所有権を確認出来ないため)VSCode用のVSIXをダウンロードして、インストールしてください。
