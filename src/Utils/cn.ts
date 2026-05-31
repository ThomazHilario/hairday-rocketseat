export const cn = (...classNames: any[]): string => {
    return classNames.filter((className) => typeof className === 'string' && className).join('')
}