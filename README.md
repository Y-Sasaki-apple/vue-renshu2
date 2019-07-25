# vue-renshu2

https://bamboowonsstring.github.io/vue-renshu2/

# やりたいこと
メモを書いたり見たりするもんです。

## 仕様
- メモ新規作成ボタンを押すことでメモを作成する。
- メモテキストボックスに文を入力してメモの内容を編集することができる。
- idテキストボックスにidを入力して移動ボタンを押すことで、指定したidのメモのページに移動する。

### 将来的な仕様（目標）
- 移動ボタンを押したのち、パスワードが設定されている場合いったん別のページに移動し、パスワードを要求する。
- パスワードを設定するチェックボックスを押すことで、メモがロックされた状態にできる。
- パスワードテキストボックスにパスワードを入力してパスワード登録ボタンを押すことで、パスワードが設定される。
- Googleログインボタンを押すことで、Googleアカウントでログインすることができる。
- Googleアカウントでログインしている場合、そのGoogleアカウントで利用したメモの履歴が残る。
- Googleアカウントでログインしている場合、自分のメモのパスワードを無効化する。

# 開発コマンドとか
## 依存ライブラリのインストール
```
yarn install
```

### テスト用のサービス起動
```
yarn run serve
```

### コンパイル
```
yarn run build
```

### gh-pagesにデプロイ
```
yarn run deploy
```

