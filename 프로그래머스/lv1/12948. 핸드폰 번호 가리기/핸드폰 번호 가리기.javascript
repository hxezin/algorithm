function solution(phone_number) {
    let result = "*".repeat(phone_number.length - 4)
    return result + phone_number.slice(-4)
}