function my_dictionary() {
    var books = [
        {
            name: "My Mixed Emotions",
            author: "Elinor  Greenwood",
            publishers: ["DK", "Penguin Random House"],
            published_year: "2018",
        },
        {
            name: "the Monster at the end of this Book",
            author: "Jon Stone",
            publishers: "Golden Books",
            published_year: "2015",
        },
        {
            name: "the Amazing Pop-up Grammar Book",
            author: "Jennie Maizels & Kate Petty",
            publishers: "GDutton Children's Books",
            published_year: "1996",
        },
    ];
    
    delete books[0].publishers;

    var booksInfo = "";
    for (var i = 0; i < books.length; i++) {
        var bookInfo = "Child book: " + books[i].name + "<br>" +
                        "Author: " + books[i].author + "<br>" +
                        "Publishers: " + books[i].publishers + "<br>" +
                        "Published Year: " + books[i].published_year + "<br><br>";
        booksInfo += bookInfo;
    }

    
    document.getElementById("Dictionary").innerHTML = "Child book:" + booksInfo;
}