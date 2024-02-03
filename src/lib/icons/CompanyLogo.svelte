<script>

 export   let color = "var(--color--text)"
  export  let size = 60
   export let stroke = 0.5
 export let hideIcon = false
</script>



<svg width={size} height={size} viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    {#if !hideIcon}
    <path d="M11 22L16.5 16.5" stroke={color} stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28 5L25.5 7.5" stroke={color} stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 21H23.5L16.5 9L10.6666 19" stroke={color} stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.5 3L29.5 15" stroke={color} stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.5 9L22.5 3" stroke={color} stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23.5 21L29.5 15" stroke={color} stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"/>
        {/if}
    <path d="M3.732 34L0.096 25.54H0.636L4.008 33.388L7.38 25.54H7.908L4.272 34H3.732ZM9.15591 34V25.54H14.2439V26.008H9.65991V29.476H14.0039V29.944H9.65991V33.532H14.2439V34H9.15591ZM15.9997 34V25.54H16.5037V29.476H22.2037V25.54H22.7077V34H22.2037V29.944H16.5037V34H15.9997ZM25.0114 34V25.54H30.0994V26.008H25.5154V29.476H29.8594V29.944H25.5154V33.532H30.0994V34H25.0114ZM31.8551 34V25.54H32.2751L37.8671 33.136V25.54H38.3351V34H37.9271L32.3231 26.392V34H31.8551Z" fill={color}/>
</svg>