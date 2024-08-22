# Check-In Question Exercise

### Requirements

1. Use React to build the application.
2. Use the provided Figma design as a starting point, but feel free to improve or modify the UI based on your ideas and best practices.
3. Ensure the application is responsive and works well on mobile devices.
4. Implement the core functionality, including the timer and navigation between screens.
5. To speed up your development, you can use a component library (e.g., Material-UI, Chakra UI, shadcn, etc.), or Tailwind CSS.
6. Host your completed work online for easy testing.

#### Appendix: Example Check-In Questions

1. If you could describe your current state of mind in three words, what would they be?
2. What's one thing you're looking forward to this week?
3. If you were a weather phenomenon, what would you be today and why?
4. What's one small win you've had recently?
5. If you could have any superpower for just today, what would it be?
6. What's one thing you've learned in the past week?
7. If your mood was a color right now, what color would it be?
8. What's one thing you're grateful for today?
9. If you could teleport anywhere for your next break, where would you go?
10. What's one goal you're working towards right now?

Feel free to use these example questions in your implementation or create your own.

Good luck, and we look forward to seeing your work!

### Improvents

1. Bigger buttons
2. Changed button variant on Reset to ghost (Not the same as Start)
3. Static layout for timer button - no layout shift
   Reset to the left - not

Exit button unessasary - is the same as back button

Start button and start timer button needs to be different

- Dont mean and do the same thing
- Change Start to Next or Let's go / Get started
- No icon

### Problems

Trouble restarting the timer after countdown reched 0
problem in else if (countdown === 0) {
setIsRunning(false);
}
