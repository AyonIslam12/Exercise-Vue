
export default {
    template: `
        <div :class="{
            'card  m-3 rounded p-3': true,
            'card bg-dark m-3 rounded p-3 text-light' : theme == 'dark',
            'card bg-light m-3 rounded p-3 text-dark' : theme == 'light',
        }">
            <h4 v-if="$slots.heading"> 
                <slot name="heading" />
            </h4>

             <span class="py-3"><slot /></span>

            <footer v-if="$slots.footer" class="border-top mt-3 pt-2"> 
                <slot name ="footer" />
            </footer>
        </div>
    `,
    props:{
        heading: String,
        theme: {type: String, default: 'dark'}
    }
}