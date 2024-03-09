// 拡張機能のアイコンがクリックされたら実行
chrome.action.onClicked.addListener(() => {
  // スクリーンショットを取得する
  chrome.tabs.captureVisibleTab((data) => {
    // 画像をダウンロード
    chrome.downloads.download({
      url: data,
      filename: 'image.png',
    })
  })
})
