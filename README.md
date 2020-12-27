# BeBody

## コンセプト
###  「トレーニーたちの発見や気づき、教えを共有するアプリ」

<br>

***
<br>

## 機能
* ### version.1
  * ### ユーザ（登録・認証・退会・管理・検索・表示）
  * ### トレーニング管理
* ### version.2
  * ### メンター/メンティー設定
  * ### タイムライン
* ### version.3
  * ### トレーニング推奨重量/回数の提示
  * ### トレーニング管理 - 記録公開機能
  * ### トレーニング管理 - 記録fork機能

<br>

***
<br>

## 使用技術
* ### Front
  * ### React
  * ### React Router
  * ### React Hooks API
  * ### React Toolkit
  * ### TypeScript

* ### Backend
  * ### ???

* ### DB
  * ### MySQL

* ### Test
  * ### Jest

* ### Infra
  * ### Heroku

* ### CI/CD
  * ### Circle CI

<br>

***
<br>

## ユーザ情報
* ### ID: string
* ### 名前: string
* ### ユーザ画像: ???
* ### パスワード: string

## トレーニング
* ### トレーニングテンプレート[ Template ]
  * ### ID： string
  * ### 名称： string
  * ### メニュー： Menu[]
  * ### 作成日： datetime
  * ### 更新日： datetime
  * ### 作成者： ユーザID

* ### 部位[ Part ]
  * ### ID： string
  * ### 名称： string
  * ### 作成日： datetime
  * ### 更新日： datetime

* ### トレーニングメニュー[ Menu ]
  * ### ID： string
  * ### 名称： string
  * ### 部位： 部位id
  * ### 作成日： datetime
  * ### 更新日： datetime
  * ### 作成者： ユーザID

* ### トレーニング記録[ Record ]
  * ### ID： string
  * ### メニュー： メニューid
  * ### weight : int
  * ### Reps ： int
  * ### 作成日： datetime
  * ### 作成者： ユーザid
  * ### 更新日： datetime
  * ### 実施日： datetime

<br>

***
<br>

## Q&A
* ### ユーザ画像をどう保存していればよいかがわからない
