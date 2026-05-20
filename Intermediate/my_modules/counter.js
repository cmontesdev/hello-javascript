export default function* createCounter() {
    let i = 0

    while (true) {
        yield ++i
    }
}