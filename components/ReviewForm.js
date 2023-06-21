app.component('review-form', {
    template:
        /*html*/
        `
        <form class="review-form" @submit.prevent="onSubmit"> <!-- .prevent (modifier, Prevents browser refresh) -->
        <h3>Leave a review<h3>

        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label><br>
        <select id="rating" v-model.number="rating"> <!-- .number (modifier, Typecasts the value as a number) -->
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <input class="button" type="submit" value="Submit">
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        };
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null) {
                alert('Review is incomplete. Please fill out every field.');
                return;
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            };
            this.$emit('review-submitted', productReview); // productReview (Payload)

            this.name = '';
            this.review = '';
            this.rating = null;
        }
    }
});
