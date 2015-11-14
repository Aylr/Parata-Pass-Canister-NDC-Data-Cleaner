canister_id = "801-0304";
clean_array = [
"8770140749",
"006030169",
"003781044",
"877014074",
"461220040"
];

build();

function build() {
	for (i=0;i<clean_array.length;i++){
		console.log(canister_id + "," + clean_array[i]);
	}
}