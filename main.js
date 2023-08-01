// "use strict";
// // TypeScript (ES6)
// figma.showUI(__html__);
alert(234);
// document.addEventListener("DOMContentLoaded", function() {
//     const submitButton = document.getElementById("submitButton");
//     submitButton.addEventListener("click", function() {
//         alert(234);
//         // const selectedLayers = figma.currentPage.selection;
//         // for (const layer of selectedLayers) {
//         //   console.log('Layer name:', layer.name);
//         // }
//         // var textareaValue = document.getElementById('textArea').value;
//         // var lines = textareaValue.split('\n');
//         // for (var i = 0; i < lines.length; i++) {
//         //   alert(lines[i]);
//         // }
//     });
// });

// figma.ui.onmessage = function (message) {
//     if (message.type === 'setTextValues') {
//         var selectedNode = figma.currentPage.selection[0];
//         if (selectedNode && selectedNode.type === 'TEXT') {
//             var textValues = message.text.split('\n');
//             selectedNode.characters = textValues.join(', ');
//             figma.closePlugin();
//         }
//     }
//     // Để truy cập các phần tử đã chọn, bạn có thể sử dụng figma.currentPage.selection
//     var selectedElements = figma.currentPage.selection;
//     // Duyệt qua từng phần tử đã chọn và in tên của chúng
//     for (var _i = 0, selectedElements_1 = selectedElements; _i < selectedElements_1.length; _i++) {
//         var element = selectedElements_1[_i];
//         showNotification("Selected element:" + element.name);
//     }
// };
function showNotification(message) {
    // Hiển thị thông báo trên màn hình
    figma.notify(message);
}
