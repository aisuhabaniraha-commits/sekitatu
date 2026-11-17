# sekitaku

HTML・CSS・JavaScriptで作成した、GitHub Pages向けの無料ツール集サイトです。

## ローカルで確認する

`index.html` をブラウザで開くとトップページを確認できます。編集時は VS Code などのエディタを利用してください。

## GitHub Pagesで公開する

1. GitHubで `sekitaku` という **Public** リポジトリを作成します。
2. このフォルダの中身をリポジトリのルートへアップロードします。
3. リポジトリの **Settings → Pages** を開きます。
4. **Build and deployment** の Source を `Deploy from a branch` にします。
5. Branch を `main`、フォルダを `/(root)` にして Save します。
6. 公開URL `https://ユーザー名.github.io/sekitaku/` を確認します。

## ファイル構成

- `index.html` — トップページ
- `assets/css/style.css` — デザイン
- `assets/js/main.js` — 検索・カテゴリ絞り込み
- `tools/` — 各ツールのページを置く場所

## ツールを追加する

1. `tools/` の中に新しいフォルダを作成します。
2. その中に `index.html` を作成します。
3. トップページの `index.html` に `.tool-card` を追加し、リンク先と `data-category`、`data-search` を設定します。

GitHub Pagesは静的サイト向けです。サーバー側で動くPython/PHPや、秘密情報を含むAPIキーは置かないでください。
