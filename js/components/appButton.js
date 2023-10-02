export default {
    template:`
    <button class="btn btn-primary m-1" :disabled="processing">
        <slot />
    </button>
   `,

   data(){
    return{
        processing: true,
    };
   },
}