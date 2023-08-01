figma.showUI(__html__);

// figma.on("selectionchange", () => {
//     console.log(figma.currentPage.selection);
// });

async function setCharactersForTextLayer(layer:any, newCharacters:string) {
  // Tải font cần thiết nếu chưa được tải
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });

  // Set lại giá trị text của layer văn bản
  layer.characters = newCharacters;
}

figma.ui.onmessage = msg => {
    if (msg.type === 'buttonClick') {
        const selectedLayers = figma.currentPage.selection;
        const textValue:[] = msg.data;
        const lengthText = textValue.length;
        const lengthSelection = selectedLayers.length;
        if (lengthSelection == 0) {
          alert("Please choose layer before submit")
          return;
        }
        if (textValue.length > 0) {
          for(let i=0; i<lengthSelection; i++) {
            if (i >=lengthText) {
              break;
            }
            let layer = selectedLayers[i];
            if (layer.type === 'TEXT') {
              setCharactersForTextLayer(layer, textValue[i]);
            }
          }
        } else {
          alert("Field textarea is required");
        }
    }
};