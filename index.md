<div>
<div style="position:relative;padding-top:56.25%;">
<iframe src="https://www.youtube.com/embed/ha0fLsSH_nc" title="Non-verbal captioning project video" frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
</div>
</div>

# Usage

You can try out our Snap Lens with Zoom today:

1. Download SnapCamera: [**https://snapcamera.snapchat.com/download/**](https://snapcamera.snapchat.com/download/)
1. Open SnapCamera and paste the following Lens link in the search bar and select the Lens that is shown in the results: [**Lens link**][lens_link]
1. Now enter Zoom and change your video settings to use SnapCamera, if you need help doing this then follow [**this guide**][snap_with_zoom]

# Introduction

Video conference meetings are an increasingly pervasive part of modern life, especially with the recent changes brought about by the COVID-19 pandemic. The use of a video feed during these meetings allows participants to notice subtle visual cues in others that aids them in understanding and communication together. Unfortunately for many individuals who rely on audio captions to participate in these meetings, such as people who are deaf and hard-of-hearing, the requirement to be closely following the captions makes it easy to miss this non-verbal cues. Research from studies on caption use on TVs shows that viewers' gaze is on the captions ~80% of the time ([**source**][caption_studies]). When using the video, feed these users are heavily relying on peripheral vision which substantially reduces their ability to see subtle cues.

A solution to this challenge would drastically improve the meeting experiences of caption-users in meetings and produce a more equitable software platform for all users. To this end, our project sets out to explore how there could be a technological solution that augments the existing caption feed in a meeting to provide additional captioning of non-verbal visual cues detected from speaking partners video feeds.

Through this work we investigate the limitations of current meeting software tools, use the [**Snapchat Lens Studio**][lens_studio] as a prototyping tool to develop a limited implementation of a non-verbal captioning system, we show that non-verbal cues can be detected from video feeds at sufficient latency to provide utility in real-time video meeting settings, and we provide viable architectural and software strategies for how a fully integrated end-to-end captioning system might work in the future.

# Related Work

In large part our work was shaped by research done on communication challenges faced by people who are blind and visually impaired. Although our target user is not blind, that fact that sighted users who rely on captions are largely unable to effectively utilize the video feed makes them similar to blind and visually impaired users in some way. Given this we were inspired by examples in the literature focused on accesible communications for people who are blind or visually impaired.

Most notably, the paper "Accessible Video Calling: Enabling Nonvisual Perception of Visual Conversation Cues" ([**link**][msr]) provided us justification that visual conversation cues are highly valued in video calling and also gave us survey data indicating the most important gestures that users wanted to detect. Though this study was mainly focused on the use of auditory signals to correspond to visual cues detected in video and we instead focused on a textual output, it inspired out project significantly. The paper "Nonverbal Signals for Face-to-Face Communication between the Blind and the Sighted" ([**link**][nonverbal_signals]) provided us with further evidence along these lines, that visual cues carry a large amount of value in conversation and their absence is a hamper to the communication experience for users.

The article "I’m deaf, and this is what happens when I get on a Zoom call" ([**link**][zoom_call]) provided us with valuable direct insight into the challenges faced by deaf users in video calls and gave further evidence that user attention was drawn to captions at the risk of missing something in verbal conversation.

# Disability Studies Perspective

The disability studies perspective was critical in shaping the direction and ultimate goal of our project. While initially our project had a very broad call of improving the video conferencing experience for many types of users and incorporating auditory signaling and emoji overlays, we sought out additional first-person perspectives that informed us that we needed to refocus. By engaging with [**Aashaka Desai**][aashaka], a PhD student and accessibility research, we were able to determine which aspects of our work had the potential to be impactful and which were of limited value. Additionally, by revisiting the literature from MSR discussed earlier, we were able to identify the most important non-verbal cues that users with disabilities were unable to see and wanted to know about.

# Methodology/Solution

In direct response to first-person data we collected and based on our research literature review, we developed a prototype which demonstrates a step in the direction of the integrated captioning system we described. We designed a Snapchat Lens which reads user video input and detects several common visual gestures, then overlays a textual description of those gestures on the user's video output. Using the [**SnapCamera**][snap_camera] tool, this Lens can be applied during a video meeting to show other meeting participants the resulting "captioned" video output. A high-level overview of this system is show below:

<img src="https://user-images.githubusercontent.com/6401746/120245481-2d52a680-c222-11eb-886b-362a653e1b5f.png" alt="A diagram showing the flow of data in software system. On the left there are user icons with a right facing arrow towards a webcam, another arrow goes right from the webcam towards a snapchat application icon, another arrow goes right from the snapchat icon to a screenshot of a beared man in a zoom meeting. There is a brace above the user/webcam/snapchat icons with text that reads 'speaking partners'. The image of a zoom meeting shows a beared man smiling and white text on a black background that reads '[smiling]'. There is a dotted arrow pointing downwards from the meeting image that is labeled 'future work', it points to a box which reads 'integrate captions with meeting software'." title="Architecture diagram of non-verbal captioning system"/>

While this system does not fully implement our vision for an end-to-end system with non-verbal cue captioning augmenting the existing meeting captions, it demonstrates that the performance of modern gesture recognition is fast enough to accomplish this task in a real-time meeting setting and that the technology is available to build such an experience.

# Validation

We believe that in order for such as system to be useable in real meetings, it would need to have high enough accuracy that noise and miscommunication would not be substantial issues. In order to validate that our solution has appropriate performance we measured metrics for the overall gesture detection model we collected data from the execution of each gesture 60 times.

Recall and Precision calculations for each gesture can be found in the table below:

| Gesture     | Recall (TP/TP+FN) | Precision (TP/TP+FP) | TP | FP | FN |
|-------------|:-----------------:|:--------------------:|----|----|----|
| Nodding     | 67%               | 100%                 | 40 | 0  | 20 |
| Hello       | 77%               | 100%                 | 46 | 0  | 14 |
| Thumbs up   | 90%               | 71%                  | 54 | 22 | 6  |
| Please wait | 97%               | 64%                  | 58 | 32 | 2  |
| Raised Hand | 100%              | 100%                 | 60 | 0  | 0  |
| Good Job    | 53%               | 100%                 | 32 | 0  | 28 |

Notes:

- TP = True Positive, FP = False Positive, FN = False Negative

- Recall: Percentage of times a specific gesture was recognized from all the times it should have been

- Precision: Percentege of times the recognition was correct from all the times a specific gesture was recognized

- "Hello" gesture is at times misinterpreted as "Please wait"

- "Good job" gesture is at times misinterpreted as "Please wait" and "Thumbs up"

We believe that these results validate that the performance of such a system is appropriate for a real-time meeting setting and non-verbal cue detection is of high enough precision to be applied in these systems.

# Learnings and future work

Through this project we learned much more about the challenges faced by users who are deaf or hard-of-hearing in video meeting environments as well as how to effective go about the design process while taking a disability studies perspective. Because of the lack of direction in our original attempts and subsequent re-focusing, it was made clear to us how important it is to get consistent feedback throughout the design process to ensure that the right features are being developed.

We believe that our work demonstrates that the technology exists today to create a system which can augment existing audio captions with captions for non-verbal cues, and that there is sufficient evidence that some users can benefit from this functionality. Through our work we found that the main limitations to development and broader adoption of such a system are likely technological limitations in the accuracy in gesture recognition models and serious concerns about data privacy. In regards to the former, while we demonstrate that gesture recognition can be done in real-time, there is considerable noise and inaccuracy in the available models. In a meeting setting, this can be very distracting and cause a degradation of the meeting experience for users, so further work must be done to improve the accuracy of these models before a robust system can be launched.

In regards to data privacy, our research shows that there is already support for third-party integration of custom captioning into services such as Zoom ([**link**][third_party_captioning]). Certainly the functionality we sought to build could be achieved through this tool if Zoom were to additionally provide access to live video feed data as well. Of course this creates a big concern for users who are privacy concious, as well as for Zoom, who may fear data leaks.

[lens_link]: https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=00c152926eae47e19f9bf5758fe7bfe0&metadata=01
[snap_with_zoom]: https://support.lensstudio.snapchat.com/hc/en-us/articles/360041102572-How-do-I-use-Snap-Camera-with-Zoom-
[caption_studies]: https://www.jstor.org/stable/44393238?seq=1
[lens_studio]: https://lensstudio.snapchat.com/
[msr]: https://www.microsoft.com/en-us/research/uploads/prod/2019/09/NAVC-CSCW-cam-ready-Submit2.pdf
[nonverbal_signals]: https://www.drhu.eu/publications/2015-ICEAPVI-NonverbalSignalsforFaceToFaceCommunication.pdf
[zoom_call]: https://www.fastcompany.com/90565930/im-deaf-and-this-is-what-happens-when-i-get-on-a-zoom-call
[aashaka]: https://make4all.org/portfolio/aashaka-desai/
[snap_camera]: https://snapcamera.snapchat.com/
[third_party_captioning]: https://support.zoom.us/hc/en-us/articles/115002212983-Integrating-a-third-party-closed-captioning-service
