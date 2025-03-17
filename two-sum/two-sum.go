package twoSum

func twoSum(nums []int, target int) []int {
	var result []int
	for i := 0; i < len(nums); i++ {
		if i != 0 {
			sum := nums[i] + nums[i-1]
			if sum == target {
				result = append(result, i-1, i)
			}
		}
	}
	return result
}
