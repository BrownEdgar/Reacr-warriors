export default function reducer(state, action) {

	switch (action.type) {
		case "task-1": return xndir1(state);
		case "task-2": return xndir2(state);
		case "task-3": return xndir3(state);
	
		default: alert("no task 😐"); return state;
	
	}
}

function xndir1(state) {

		const clone = [...state];
		let index = clone.findIndex(elem => elem > 3);
	if (state.indexOf(3) >= 0) {
		clone.splice(state.indexOf(3),1);
		clone.splice(index, 0, 3)
	}
		// if (index === -1) {
		// 	clone.push(3)
		// }else{
		// 	clone.splice(index, 0, 3)
		// }


	return clone
}
function xndir2(state) {}
function xndir3(state) {
	let clone = [...state];

	clone = clone.sort((a,b) => {
		console.log({ a, b });
		return a.length - b.length;
	})

	return clone;


}