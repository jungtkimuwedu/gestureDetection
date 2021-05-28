## Non-verbal captioning



### Place Holder for video embedding

### Introduction
Introduction– 1-3 paragraphs: Present the promise/ obstacle/ solution for your project— What is the problem you are solving and why is it important to solve it?

Many users in video meetings rely on captions to participate, such as DHH individuals. For sighted users, research shows user's gaze to be on captions ~80% of time [source](https://www.jstor.org/stable/44393238?seq=1)
These users are unable to experience visual cues, and our project is aimed at enabling visual cues for captions users.


TODO: Elaborate on obstacles
False positive/negatives, had to use snap chat, not the best tool. Backwards compatbility issues + sometimes things work on mobile but not on desktop snap camera.
Lens studio 4.0 build doesn't work for SnapCamera, etc. Building a custom model is no easy feat due to all the hyperparameter search that needs to be done + our limited hardware to train such model, and no time to explore all the different types of neural networks.

TODO: Need to elaborate this
Our solution is to use computer vision to detect visual queues, and present them as a caption for users who rely on captions to participate in meetings.

### Related Work

Related Work– 1-3 paragraphs: Talk about relevant work that closely connects with your project.

Elaborate on these + Aasshaka's testimony

Accessible Video Calling: Enabling Nonvisual Perception of Visual Conversation Cues [link](https://www.microsoft.com/en-us/research/uploads/prod/2019/09/NAVC-CSCW-cam-ready-Submit2.pdf)

Nonverbal Signals for Face-to-Face Communication between the Blind and the Sighted [link](https://www.drhu.eu/publications/2015-ICEAPVI-NonverbalSignalsforFaceToFaceCommunication.pdf)

I’m deaf, and this is what happens when I get on a Zoom call [link](https://www.fastcompany.com/90565930/im-deaf-and-this-is-what-happens-when-i-get-on-a-zoom-call)


### Methodology– about 3 paragraphs: What did you do in your project- 

what did you design or implement? What role did people with disabilities play in this, if any
Aashaka's testimony made us pivot from showing Emoji to caption

Disability Studies Perspective– 1 paragraph: How did a disability studies perspective inform your project?
- Gestures to show
- Showed how they miss out on visual queues
- Importance of captions

Learnings and future work – 1-2 paragraphs: Describe what you learned and how this can be extended/ built on in the future.

Future work: Custom models for better accuracy, when gesture is detected, send the information into a custom captioning service (https://support.zoom.us/hc/en-us/articles/115002212983-Integrating-a-third-party-closed-captioning-service) so that these captions are part of the real meetings captions




===============================================================================================================================================================================

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/jungtkimuwedu/gestureDetection/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
