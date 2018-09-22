package main

import (
	"fmt"
)

func main() {
	arr := []string{"a", "b", "c", "d"}
	subsets(arr)
}

func subsets(arr []string) {
	n := uint(len(arr))
	for i := uint(0); i < 1<<n; i++ {
		str := ""
		for j := uint(0); j < n; j++ {
			if (i & (1 << j)) == 0 {
				str += arr[j]
			}
		}
		fmt.Println("found:", str)
	}
}
