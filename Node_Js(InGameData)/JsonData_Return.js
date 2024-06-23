const fs = require('fs');
const path = require('path');
const Json_folderPath = '../Node_Js(Common)/JsonData'; 

function GetAllJsonFile()
{
    return fs.readdirSync(Json_folderPath).filter(file => file.endsWith('.json'));
}

// JSON 파일 읽어오기
function readJsonFile(fileName) {
    const filePath = path.join(Json_folderPath, fileName);
    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileData);
    } catch (error) {
        console.error(`Error reading ${fileName}:`, error);
        return null;
    }
}

function GetAllJsonData()
{
    const jsonFiles = GetAllJsonFile();
    const jsonData = jsonFiles.map(file => readJsonFile(file));
    return jsonData;
}

module.exports = {
    GetAllJsonData: GetAllJsonData
};
