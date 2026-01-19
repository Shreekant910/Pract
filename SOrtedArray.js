class Solution {
    public boolean isSorted(ArrayList<Integer> nums) {
        //your code goes here
		int n = nums.size();

		for(int i=0;i<n;i++){

			if(nums.get(i+1)>=nums.get(i)) return true ;
		}
		return false;
    }
}