import loadFooter from './components/footer.js';
import loadNav from './components/nav.js';

document.addEventListener('DOMContentLoaded', () => {
  loadFooter();
  loadNav();
});

const about = `As an experienced mobile app developer, I have successfully designed, developed, a
nd deployed multiple Android and iOS applications using industry-standard tools such as Android Studio and Xcode.
 My proficiency spans the entire mobile development lifecycle, from initial concept and wireframing to coding, testing, 
 and publishing on Google Play Store and Apple App Store. On the Android side, I have utilized Android Studio extensively
  to build robust and scalable applications using Java and Kotlin. My experience includes working with Android SDK components, 
  integrating RESTful APIs, managing local databases with Room and SQLite, and implementing modern architectural patterns 
  like MVVM and Clean Architecture to ensure maintainable and testable codebases. I am adept at optimizing app performance,
   memory management, and handling diverse device configurations and screen sizes. For iOS development, 
   I have leveraged Xcode to create seamless, user-friendly apps written primarily in Swift and Objective-C. 
   I am well-versed in UIKit and SwiftUI frameworks, enabling me to craft intuitive interfaces and smooth user experiences. 
   I have implemented Core Data for local persistence, integrated third-party SDKs, and used tools like Instruments 
   for performance profiling and debugging. Additionally, I have experience managing app lifecycle events, 
   push notifications, and in-app purchases within the Apple ecosystem. My cross-platform experience also 
   includes handling platform-specific design guidelines to ensure each app meets the expectations of its user 
   base, maintaining consistent branding and functionality across devices. I have collaborated closely with UI/UX 
   designers, backend engineers, and QA teams to deliver high-quality applications on time and within budget. 
   Beyond development, I have published and maintained several applications, managing version updates, monitoring 
   analytics, and responding to user feedback to continuously improve app quality and engagement. My strong 
   understanding of both Android and iOS ecosystems allows me to recommend best practices for security, 
   privacy, and compliance with store policies. Overall, my comprehensive experience with Android Studio and
    Xcode empowers me to develop versatile, performant,
 and polished mobile applications that provide excellent user experiences and meet business objectives`;

 document.getElementById('about').innerHTML = about