let body = document.querySelector('body')
let newDiv = document.createElement('div')
let coin = {
    state: 0,
    flip: function () {
        let zeroOrOne = Math.floor(Math.random() * 2)
        this.state = zeroOrOne
    },
    toString: function () {
        if (this.state === 0) {
            return 'Heads'
        } else if (this.state === 1) {
            return 'Tails'
        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        if (this.state === 0) {
            image.src = './images/Quarter-Heads.png'
            newDiv.append(image)
        } else if (this.state === 1) {
            image.src = './images/Quarter-Tails.jpg'
            newDiv.append(image)
        }
    }
};

function display20Flips() {
    for (let index = 1; index <= 20; index++) {
        coin.flip()
        let result = coin.toString()
        body.append(result + ' ')
    }
}

function display20Images() {
    for (let index = 1; index <= 20; index++) {
        coin.flip()
        coin.toHTML()
    }
    body.append(newDiv)
}

display20Flips()
display20Images()