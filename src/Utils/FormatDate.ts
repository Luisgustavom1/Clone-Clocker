export default function formatDate(date: Date) {
    const dateFormated = date.toDateString().split(' ')
    return dateFormated
}