# kadai_react_01
- 実装内容 -
 オンライン講義のじゃんけんを加工し、todayと送信したら本日の日付、yearと入れたら年、monthと入れたら月、dateと入れたら日（今気づきましたがこれをやるならdayですね。。）を返す単純なAPIを作成しました。
 
 実行例：curl -X POST -H "Content-Type: application/json" -d "{\"myhand\":\"today\"}" localhost:3001/datetime
（こちらも今気づきましたが、myhandのままですね。。入力値ってことで宜しくお願いします）
