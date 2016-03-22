export default function (state = null, action) {
    if (action.type == 'BOOK_SELECTED') {
        return [
            {title: "Harry Potter", author: "Kevin"},
            {title: "The dark Tower", author: "Philip"},
        ]
    }
    return [
        {title: "Harry Potter", author: "Kevin"},
        {title: "The dark Tower", author: "Philip"},
        {title: "Javascript Book", author: "Dan"},
        {title: "Javascript Book2", author: "Clan"},
    ]
}