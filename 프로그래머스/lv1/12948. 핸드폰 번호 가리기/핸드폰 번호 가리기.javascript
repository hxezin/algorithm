function solution(phone_number) {
    let result = "*".repeat(phone_number.slice(0, phone_number.length-4).length)
    return result + phone_number.slice(phone_number.length-4)
}
