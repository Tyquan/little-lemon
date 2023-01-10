function Specials() {
    const specials = [
        {
            name: "Greek Salad",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: 12.99,
            image: "https://www.mygreekdish.com/wp-content/uploads/2013/05/Traditional-Greek-Salad-recipe-Horiatiki-Xoriatiki-1-scaled.jpg",
            id: 0
        },
        {
            name: "Brushetta",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
            price: 7.99,
            image: "https://www.shugarysweets.com/wp-content/uploads/2019/06/bruschetta-recipe.jpg",
            id: 1
        },
        {
            name: "Grilled Fish",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
            price: 12.99,
            image: "https://lh3.googleusercontent.com/SFS-b-a1MVnPW8JYqxHARux0-AhM8EFD-lhbELrDqbvEhWMya6ax0ZBxV6OOxUrkLgHu2pzVr8EduJquXzhd=w1280-h1280-c-rj-v1-e365",
            id: 2
        }
    ];

    return (
        <article id="specialsSection">
            <h3>ORDER FOR DELIVERY!</h3>
            <ul id="menuItems">
                <li>Lunch</li>
                <li>Mains</li>
                <li>Desserts</li>
                <li>A La Carte</li>
            </ul>
            <hr />
            <section id="specialsList">
                {specials.map((special) => {
                    return (
                        <section key={special.id} id="specialsItem">
                            <section class="row">
                                <section class="col-9">
                                    <h4>{special.name}</h4>
                                    <p>{special.description}</p>
                                    <p>${special.price}</p>
                                </section>
                                <section class="col-3">
                                    <img src={special.image} id="specialImage" alt="Special Food" />
                                </section>
                            </section>
                        </section>
                    );
                })}
            </section>
        </article>
    );
}

export default Specials;