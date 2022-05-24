arr = [2, 4, 3, 5, 0, 36, 8]
function fun1(arr) {
    arr.map((item, idx) => {
        if (idx % 2 === 0) {
            if (item % 2 === 0) {
                console.info(item, 'la so chan')
            } else {
                console.info(item, 'khong la so chan')
            }
        }
    })
}
// fun1(arr)

const str = "Hello"
function repeatEnd(str, n) {
    let newStr = ""
    let tam = str.substr(str.length - n, n)
    for (let i = 0; i < n; i++) {
        newStr += tam;
    }
    return newStr
}
console.info(repeatEnd(str, 2))


















// const options = [
//     { id: 'optionAll', label: 'Tất cả', value: false },
//     { id: 'option1', label: 'option 1', value: false },
//     { id: 'option2', label: 'option 2', value: false },
//     { id: 'option3', label: 'option 3', value: false },
//     { id: 'option4', label: 'option 4', value: false },
//     { id: 'option5', label: 'option 5', value: false },
//     { id: 'option6', label: 'option 6', value: false },
// ]

// const fun = (arr, key) => {
//     return arr.map((item) => { return item[`${key}`] })
// }
// const a = fun(options, 'id')
// console.info(a)


// const input = [
//     { id: 1, name: "AAA", date: "2022-01-27 13:33:12.410", month: '1', value: '123' },
//     { id: 2, name: "AAA", date: "2022-01-27 15:33:12.410", month: '1', value: 'dsa' },
//     { id: 3, name: "AAA", date: "2022-01-27 17:33:12.410", month: '1', value: 'xcv' },
//     { id: 4, name: "AAA", date: "2022-03-27 19:33:12.410", month: '3', value: 'fsdf' },
//     { id: 5, name: "AAA", date: "2022-03-27 13:33:12.410", month: '3', value: '324' },
//     { id: 6, name: "AAA", date: "2022-05-27 19:33:12.410", month: '5', value: 'vfd' },
//     { id: 7, name: "AAA", date: "2022-05-27 23:33:12.410", month: '5', value: '123' },
//     { id: 8, name: "BBB", date: "2022-02-27 13:33:12.410", month: '2', value: 'ertw' },
//     { id: 9, name: "BBB", date: "2022-02-27 13:33:12.410", month: '2', value: '12bfd3' },
//     { id: 10, name: "BBB", date: "2022-09-27 13:33:12.410", month: '9', value: 'ewr' },
//     { id: 11, name: "BBB", date: "2022-09-27 13:33:12.410", month: '9', value: 'nge' },
//     { id: 12, name: "BBB", date: "2022-11-27 13:33:12.410", month: '11', value: 'tytr' },
//     { id: 13, name: "BBB", date: "2022-11-27 13:33:12.410", month: '11', value: 'nfnf' },
//     { id: 14, name: "BBB", date: "2022-11-27 13:33:12.410", month: '11', value: 'yt' },
// ]

// function Group(arr = [], key) {
//     return key ? arr.reduce((t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {}) : {};
// }

// function get(arr = [], key) {
//     // group theo prd_code -> result là obj có key: prd_code, value: arr data
//     const resultGroup = Group(arr, key)

//     // chuyen resultGroup thanh arr prd_code
//     let resultSort = Object.values(resultGroup)

//     const resultArr = []
//     resultSort.map((r) => {
//         resultArr.push(r[0])
//     })
//     return resultArr
// }

// function get2(arr = [], key1, key2) {
//     // group theo prd_code -> result là obj có key: prd_code, value: arr data
//     const resultGroup = Group(arr, key1)

//     // chuyen resultGroup thanh arr: group prd_code
//     let resultSort = Object.values(resultGroup)

//     // xử lý từng group prd_code theo month
//     let tam = []
//     resultSort.map((a) => {
//         tam.push(get(a, key2))
//     })

//     return tam
// }

// // xu ly arr month -> row
// function formatRow(dataRow = []) {
//     const result = {}
//     result.id = dataRow[0].id
//     result.name = dataRow[0].name
//     dataRow.map((r) => {
//         result[`value_${r.month}`] = r.value
//     })
//     return {
//         ...result
//     }
// }

// function formatMonth(arr = [], key1, key2) {
//     const arrRows = get2(arr, key1, key2)
//     const result = []
//     arrRows.map((dataRow) => {
//         result.push(formatRow(dataRow))
//     })
//     return result
// }

// const rel1 = get2(input, 'name', 'month')
// console.info(rel1)


// const rel1 = get2(input, 'name', 'month')
// console.info(rel1)

// console.info(rel2)
// console.info(get2(input, 'name'))
// get(input, 'name')

// const tamRel = Group(input3, 'name')
// console.info(getMax(tamRel))

// // -------------- xử lý obj
// const obj = {
//     mssv1: 1,
//     mssv2: 2,
//     mssv3: 3,
//     mssv4: 4,
//     mssv5: 5,
// }
// // // ---- c1
// const tamKey = Object.values(obj)
// console.info(tamKey)

// // // ---- c2
// const fun = (obj = {}) => {
//     const tam = []
//     for (let o in obj) {
//         tam.push(obj[o]);
//     }
//     return tam
// }
// console.info(fun(obj))



// // --------------------- sort arr obj theo diem
// const arrStu = [
//     { name: 'A', point: 7 },
//     { name: 'B', point: 4 },
//     { name: 'C', point: 8 },
//     { name: 'D', point: 5 },
//     { name: 'E', point: 9 },
//     { name: 'F', point: 3 },
//     { name: 'G', point: 6 },
// ]

// const fun = (arr = []) => {
//     arr.sort((a, b) => {
//         return a.point - b.point
//     })
//     return arr
// }
// console.info(fun(arrStu))



// //  ------------------ bài toán chuỗi đối xứng
// const str1 = 'aabbaa'
// const str2 = 'aacbda'
// const str3 = 'aaecaa'

// const fun = (str) => {
//     let tam = str.length - 1
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[tam--]) {
//             console.info('khong là chuỗi đối xứng')
//             return false
//         }
//     }
//     console.info('là chuỗi đối xứng')
//     return true
// }
// fun(str3)


// // lấy value theo key
// const obj = { key1: 'dsad', key2: 'dasdas', key3: '231' }
// const getValueByKey = (obj = {}, key) => {
//     for (var k in obj) {
//         if (k === key) {
//             return obj[key]
//         }
//     }
//     return 0
// }
// let result = Boolean(getValueByKey(obj, 'key22'))
// console.info(result)


// // sum key in obj
// let array = [
//     { name: "Peter", age: 43 },
//     { name: "John", age: 32 },
//     { name: "Jake", age: 21 }
// ];
// const getSumByKey = (arr, key) => {
//     return arr.reduce((accumulator, current) => accumulator + Number(current[key]), 0)
// }
// const total = getSumByKey(array, 'age')
// const arr = [
//     { a: '', b: 2, c: 2 },
//     { a: 5, b: 2 },
//     { a: '', b: 2, c: '' },
//     { a: 7, b: 2 },
//     { a: '', b: 2 },
//     { a: null, b: 2 },
// ]
// const fun = (obj) => {
//     const newObj = JSON.parse(JSON.stringify(obj));
//     for (var prop in newObj) {
//         if (newObj.hasOwnProperty(prop)) {
//             newObj[prop] = null
//         }
//     }
//     return newObj
// }
// const abc = fun(arr[0])
// console.info(abc)


//  // xử lý arrRow Obj theo col
// const arr = [
//     { name: 'A', value_1: 1, value_2: 2, value_3: 3 },
//     { name: 'B', value_1: 4, value_2: 5, value_3: 6 },
// ]
// // const arrCheck = [1, 2, 3];
// const arrCheck = ['01', '02', '03'];
// const fun = (row = {}, check = []) => {
//     return check.map((m) => {
//         row[`value_${m}`] = 'g'
//     })
// }
// const fun2 = (arr = []) => {
//     return arr.map((a) => {
//         fun(a, arrCheck)
//     })
// }
// fun2(arr)

// const getSumByKey = (arr, key) => {
//     return arr.reduce((accumulator, current) => Math.abs(accumulator + Number(current[key])), 0)
// }
// const total = { name: 'total' }
// function fun3(arr = [], arrMonths = [], rowTotal = {}) {
//     arrMonths.map((month) => {
//         rowTotal[`value_${Number(month)}`] = getSumByKey(arr, `value_${Number(month)}`)
//     })
// }
// fun3(arr, arrCheck, total)
// console.info(total)


// // format string - number
// const arrMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
// function formatStr(arr = []) {
//     // arr.map((a) => {
//     //     console.info(Number(a))
//     // })
//     console.info(Number(arr))
// }
// formatStr(arrMonths)

////////////////////////    xử lý arrObj cần group + lấy row latest ///////////////////////////////////

// // group prd_code by month
// function Group(arr = [], key) {
//     return key ? arr.reduce((t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {}) : {};
// }

// // get latest in group
// function getMDMonthLatest(arr = [], key) {
//     // group theo prd_code -> result là obj có key: prd_code, value: arr data
//     const resultGroup = Group(arr, key)

//     // chuyen resultGroup thanh arr group prd_code
//     let resultSort = Object.values(resultGroup)

//     // lấy phần tử lớn nhất trong arr data push vao arr mới -> kết quả cần lấy
//     const resultArr = []
//     resultSort.map((r) => {
//         resultArr.push(r[0])
//     })
//     return resultArr
// }

// // group month
// function getMDMonthLatestInYear(arr = [], key1, key2) {
//     const resultGroup = Group(arr, key1)

//     // chuyen resultGroup thanh arr group prd_code
//     let resultSort = Object.values(resultGroup)

//     // lấy phần tử lớn nhất trong arr data push vao arr month -> kết quả cần lấy
//     const resultArr = []
//     resultSort.map((r) => {
//         resultArr.push(getMDMonthLatest(r, key2))
//     })
//     return resultArr
// }

// // format arr month -> rowMDYear
// function formatRowYear(dataRow = []) {
//     let result = {}
//     result.dong_hang = dataRow[0].dong_hang
//     result.line = dataRow[0].line
//     result.noi_dung = dataRow[0].noi_dung
//     result.prd_code = dataRow[0].prd_code
//     result.note = dataRow[0].note
//     result.ten_sp = dataRow[0].ten_sp
//     dataRow.map((r) => {
//         result = Object.assign(result, formatRow(r, r?.month))
//     })
//     return {
//         ...result
//     }
// }

// // call formatRow cho arr data ban đầu
// function formatRowsYear(arr = [], key1, key2) {
//     const arrRows = getMDMonthLatestInYear(arr, key1, key2)
//     const result = []

//     arrRows.map((dataRow) => {
//         result.push(formatRowYear(dataRow))
//     })
//     return result
// }
















