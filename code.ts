figma.showUI(__html__);

const setCharactersForTextLayer = async function setCharactersForTextLayer(layer:any, newCharacters:string) {
  await figma.loadFontAsync({ family: layer.fontName.family, style: layer.fontName.style });
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