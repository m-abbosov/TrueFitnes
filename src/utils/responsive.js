const size = {
    mobile: '350px',
    // tablet: '500px',
    dectop: '501px',
    maxWidth: "500px"
}
export const device = {
    mobile: `(min-width:${size.mobile})`,
    // tablet: `(min-width:${size.tablet})`,
    dectop: `(min-width:${size.dectop})`,
    maxWidth: `(max-width: ${size.maxWidth})`
}