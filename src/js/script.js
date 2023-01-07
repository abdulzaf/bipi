NDAY = 1;
NEXERCISE = 5;

window.onload = function () {
    //generateCards();
}

function generateCards() {
    for (i=0; i<NDAY; i++) {
        // Container
        var container = document.createElement("div");
        container.id = 'container_'+i;
        container.classList.add('container','py-2','shadow-sm');
        document.getElementById('main').appendChild(container);
        // Grid
        var grid = document.createElement("div");
        grid.id = 'grid_'+i;
        grid.classList.add('row','row-cols-md-5','g-4');
        document.getElementById('container_'+i).appendChild(grid);
        for (j=0; j<NEXERCISE; j++) {
            // Column
            var col = document.createElement("div");
            col.id = 'col_'+i+'_'+j;
            col.classList.add('col');
            document.getElementById('grid_'+i).appendChild(col);
            // Card
            var card = document.createElement("div");
            card.id = 'card_'+i+'_'+j;
            card.classList.add('card','text-dark','bg-primary','h-100');
            document.getElementById('col_'+i+'_'+j).appendChild(card);
            // Card Body
            var card_body = document.createElement("div");
            card_body.id = 'card_body_'+i+'_'+j;
            card_body.classList.add('card-body');
            document.getElementById('card_'+i+'_'+j).appendChild(card_body);
            // Card Body
            var image = document.createElement("img");
            image.id = 'image_'+i+'_'+j;
            image.classList.add('card-img-top');
            image.src = '/src/img/m1.jpg';
            document.getElementById('card_'+i+'_'+j).appendChild(image);
        }
    }
}