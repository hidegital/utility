/*photoshop plugin*/

var resultText = "";

function textCheckFunc(targetDocument) {
	var layers = targetDocument.layers;
	for (var layerIndex = 0, len = layers.length; layerIndex < len; layerIndex++){
		var currentLayer = layers[layerIndex];
		if (currentLayer.typename == "LayerSet") {
			textCheckFunc(currentLayer)
		}else{
			if(currentLayer.kind == LayerKind.TEXT){
				resultText += currentLayer.textItem.contents +'\n' ;
			}
		}
	}
}

function textExport() {
	LINEFEED_CODE = "macintosh";
	var saveFile = File.saveDialog("textのファイル名と場所を指定してください。");
	if(saveFile == null){
		return;
	}
	filePath = saveFile.path + "/" + saveFile.name+".txt";
	var OUTPUT_FILE	= new File(filePath);
	OUTPUT_FILE.encoding = "utf-8";
	OUTPUT_FILE.linefeed = LINEFEED_CODE;
	OUTPUT_FILE.open("w", "TEXT", "????");
	OUTPUT_FILE.writeln(resultText);
}

textCheckFunc(activeDocument);
textExport();
