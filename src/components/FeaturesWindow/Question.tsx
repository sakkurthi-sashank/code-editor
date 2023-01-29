import React from "react";

export const Question = () => {
  return (
    <div className="prose prose-sm max-w-none px-6 py-4">
      <h3>1.Two Sum</h3>
      <p>
        Given an array of integers nums and an integer target, return indices of
        the two numbers such that they add up to target.
        <br /> You may assume that each input would have exactly one solution,
        and you may not use the same element twice.
        <br />
        You can return the answer in any order.
      </p>
      <h4>Example 1:</h4>
      <pre className="rounded-md bg-gray-100 px-4 py-3 text-sm text-gray-800">
        Input: nums = [2,7,11,15], target = 9
        <br />
        Output: [0,1]
        <br />
        Output: Because nums[0] + nums[1] == 9, we return [0, 1].
      </pre>
      <h4>Example 2:</h4>
      <pre className="rounded-md bg-gray-100 px-4 py-3 text-sm text-gray-800">
        Input: nums = [3,2,4], target = 6
        <br />
        Output: [1,2]
      </pre>
      <h4>Example 3:</h4>
      <pre className="rounded-md bg-gray-100 px-4 py-3 text-sm text-gray-800">
        Input: nums = [3,3], target = 6
        <br />
        Output: [0,1]
      </pre>
      <h4>Constraints:</h4>
      <pre className="rounded-md bg-white px-3 py-0 text-sm text-gray-800">
        <li>
          {"2 <= nums.length <= 10"}
          <sup>3</sup>
        </li>
        <li>
          {"-109 <= nums[i] <= 109"}
          <sup>3</sup>
        </li>
        <li>
          {"-109 <= target <= 109"}
          <sup>3</sup>
        </li>
      </pre>
    </div>
  );
};
