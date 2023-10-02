export default {
    template:`
    <button 
        :class="{
            'btn btn-primary m-1': type === 'primary',
            'btn btn-dark m-1': type === 'dark',
            'btn btn-success m-1': type === 'success',
            'btn btn-warning m-1': type === 'warning',
            'is-loading': processing
           
        }" 

        :disabled="processing">
        <slot />
    </button>
   `,
   props:{
      type:{
        type: String,
        default:"success"
      },
      processing:{
        type: Boolean,
        default: false
      }
   }

}