interface IName {
	id: number;
	name: string;
}

let model = new Array<IName>();
let notInSyncData: Array<IName> = new Array<IName>();

model.push({ id: 1, name: "test1" });
model.push({ id: 2, name: "test2" });
model.push({ id: 3, name: "test3" });
model.push({ id: 4, name: "test4" });

notInSyncData.push({ id: 1, name: "test1" });
notInSyncData.push({ id: 5, name: "test5" });
notInSyncData.push({ id: 6, name: "test6" });


let difference = model.filter((item: any) => {
	if (notInSyncData.length === 0) {
		return -1;
	}
	const obj = notInSyncData.filter((x: any) => {
		return x.id === item.id
	});
	return (obj.length === 0);
});
console.log("difference", difference);

//alert("updatedifference-" + JSON.stringify(difference));
//TODO Thomas: Überprüfen ob dies stimmt!
const newList = [...difference, ...notInSyncData];

console.log("ne3wList", newList);