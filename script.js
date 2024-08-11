document.addEventListener('DOMContentLoaded', function() {
    // 示例：点击 "Add to Cart" 按钮时显示提示
    const addToCartButtons = document.querySelectorAll('.product-item button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Product added to cart!');
        });
    });

    // 示例：处理优先提货权购买
    const priorityButton = document.querySelector('.priority button');
    priorityButton.addEventListener('click', function() {
        alert('Priority access purchased!');
    });

    // 示例：处理代币购买
    const buyTokensButton = document.querySelector('.tokens button');
    buyTokensButton.addEventListener('click', function() {
        alert('Tokens purchased!');
    });

    // 示例：处理拍卖竞标
    const placeBidButton = document.querySelector('.auction button');
    placeBidButton.addEventListener('click', function() {
        alert('Bid placed successfully!');
    });
});
