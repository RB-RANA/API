const FormatPrice =({price})=>{

    return (Intl.NumberFormat('en-SA', { 
        style: 'currency',
         currency: 'SAR',
         maximumFractionDigits:2,
         }).format(price));
}

export default FormatPrice

