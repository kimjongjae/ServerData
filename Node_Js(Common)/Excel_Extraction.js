const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

// 엑셀 파일을 JSON으로 변환하는 함수
function excelToJson(excelFilePath) {
    const workbook = xlsx.readFile(excelFilePath);

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const jsonData = xlsx.utils.sheet_to_json(sheet);

    return jsonData;
}

// 테이블 경로
const folderPath = './Node_Js(Common)/JsonData'; 
// Json폴더 경로
const Json_folderPath = './Node_Js(Common)/JsonData'; 

// 폴더 내 파일 목록 읽기
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    // 각 파일에 대해 처리
    files.forEach(file => {
        // 파일의 절대 경로 생성
        const filePath = path.join(folderPath, file);

        // 파일 확장자가 .xlsx 인 경우에만 처리
        if (path.extname(file).toLowerCase() === '.xlsx') {
            // 엑셀 파일을 JSON으로 변환
            const jsonData = excelToJson(filePath);

            // JSON 데이터를 파일로 저장 (예시: 파일명.xlsx -> 파일명.json)
            const jsonFileName = path.basename(file.sheetName, '.xlsx') + '.json';
            const jsonFilePath = path.join(Json_folderPath, jsonFileName);
            fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

            console.log(`Converted ${file} to ${jsonFileName}`);
        }
    });

    console.log('Conversion completed.');
});