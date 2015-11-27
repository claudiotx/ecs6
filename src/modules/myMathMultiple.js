export const sqrt = Math.sqrt;
export function square(a){
	return a*a;
}
export function diag(a,b){
	return sqrt(square(a)+square(b));
}