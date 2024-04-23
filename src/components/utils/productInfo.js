export const getAvailableColors = (colors) => {
  return colors.map((color) => {
    return {
      code: color.id,
      value: color.hexCode,
      name: color.name
    }
  })
}

export const getAvailableSizes = (detail, selectedColor) => {
  if (!selectedColor) return [];

  const selectedColorDetails = detail.colors.find(color => color.id === selectedColor.code)

  return selectedColorDetails.sizes.map((size) => {
    return {
      code: size.id,
      value: size.name
    }
  })
}

export const getReferenceByColorAndSize = (productDetail, color, size) => {
  const colorSelected = productDetail.colors.find(c => c.id === color)
  const sizeSelected = colorSelected.sizes.find(s => s.id === size)
  return sizeSelected.reference
}