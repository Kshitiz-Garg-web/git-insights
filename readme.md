# Lecture 1


## key points
1. gui ek graphical interface hai jider hm interact krka perform kar skta h ok
2. same operation we can also perform via the command means via cli
cmd / wps / cloud shell / bash -> all are shell
cmd and wps based on window os
bash based on linux os
3. alg alg shell mai comand different hojti hai even for same work isi karan sai ek chij fixed h ki alg alg server's ka lya hm linux based shell ka hi use krga 
4. asa possible h ki kisis operation perform kerna k lya same comand ho per unska begavoire alg alg shell little bit so hm bash k respect mai hi sab chija explore krga bcz at the end to hmko servers k interact krna h islya usi ka uper ka krga ok kyu bakar kisis or k lya comands dekga ok
5. basicallt ager m overall bato to kuch asa h 
terminal ek software jsika under multiples software mtlb ki wo shells ok isko kuch iss tere smj lo ki ek borswer open krka different different tab mai website open krna 

## doubt
1. sir n bola ki terinal app hai ok or uska under multiple app run lrta h under app h powershell , bash shell ok per yha dono shell to alg al;g os per based and terminal jo allication wow kisi ek os per based hgoa right if yes to wo knsa os ha for terminal ok or fr wo ek inner app ko run , mananagr kr rha jabki woot kisi or os per based means parent os1 per based and uska children os2 per absed h to kesa parent children ko manage kr rha h ?????
2. cli koi ek common term hai , like gui ya cli el software ha mtlb ki terminal ek software h ok per to cli ek parent k for temrinal like asa kuch mtlb ki terminal k alva bhi cli hoti mtlb terminal ek cli application h to fr terminal k alva bhi cli applications hoti ya fr cli mtlb terminal hi hota h ????




# lecture 2

## key points
1. git install kya to pata chla ki git hmko kai sara componnets provide krta h ok like bash shell / git gui / git cmd etc
2. git ka gui k interface , not so good then i check a source code form it in github 
3. git ka use krka hm yha sab comand chla skta h but same chija or bhi sheels h una bhi krta h per git k jo main kam h wo yha nai h bcz git ek tool j ki build h version controll system per ok jiska help s hm log project k version k track rkta h and work ko manage kerta h individaully or team mai 
4. repositry ek databse k tere h but not truly , jider hmra code k version store and track hota h
5. unstaged area means current working directory measn jo abhi tak ya fr jo new kam kere h wo jisko abhi commit nai kera h wo idedr hota h but jesa hi staging area m add krta h iska matlb ki ek bhr frr s check krlo final commit s bcz fr riska bad git iska track rkga glti s extra ya glt chija to add nai hoga h
6. single file k trakc ya recod check krn a h to uska lya hm use krta h vs code k feature timeline (user 2 ticks milta h local history , git hisptory so basically we need for git so check git one is must)
7. if we want to see history for a file if we dont init git then time line with local hisotry





























































## doubts
1. ![alt text](./images/image.png)
yha kns kns component h or kiska kya sue ha 
2. vim name k ek edtitor h jisko git via defualt select rkta h [er mena select kya vscode to kya mtlb h iskam]
3. git cmd and git bash dono comonent ha ok to differnce kya ha
4. git jo ki software h wo knsa databse k use krta h kya mere sawal sai bhi h 
5. kai bhr -, -- use krta h per asa kyu or kabor kiska sath ok in command


# lecture 3
## key points
1. jab bhi hm log kerta h to hm milta h ek head krka basically iska kam hota h yha represent kerna ki abhi hm knsa branch mai h ya fr knsa commit mai h ok


# lecture 5
## key points
1. these all are gui application where we manage a repo kind of git repo
bitbucket (intergrable via jira)
github
gitlab


2. fast forwared merge 
- ismai merge commit nai ata h 
- jab commit history linear h to asa hota hai , 



























































# all basics comand for terminal
----------------------------------------

  ls
  cd
  cd ../

  touch
  mkdir

  rm currentfilename/currentfoldername newname (to rename)

  rm filename1 foldernae filename2 ./location2 (location2 will br relative or absu both) (to move from one folder to another)

  rm filename
  rmdir foldername (if folder is empty)

  filename -> to run file (for others)
  start filename -> to run file in git bash

  .code (to open the vs code @ current working directory)
  pwd

  softwareName --version

----------------------------------------

# all basics comand for git (bash terminal)
----------------------------------------

 ## git comand 
 1.  git init
 2.  git add filename1 2 3 etc or git add . (knsa file track kerni hai uska lya unn sab file ko staging area m add krna hoti means like stanging area mai move kerna from unstaged area )
 3. git status
 5. git commit -m "commit message here"
 6. 
 7. git config --global user.key (to get)
 8. git config --global user.key "value" (to sett) (part of configuration) (name and email needs to configure)
 9. git log (to see all commits , fro here we get commit_id)
 10. git checkout commit_id
 11. git branch branchName
 12. git branch (to log all branchs)
 13. git branh -d branchName
 14. git checkout branchName (to enter into that brnach)
 15. git merge branchName (jiski kerna ) , (jiska under kerna h uss branch m hona ust h ok)
 16. git push -u origin main




 ## git flags or comand line options
 1. -s (short m diplay kerta h)
 2. --all
 3. --oneline
 4. --graph
 5. --decorate
 6. -u to set upstream ok
 7. -D,-d to delete branch

 `Note`
 Har short option ka long equivalent available nahi hota aur har long option ka short equivalent bhi nahi hota.

 Short aur Long options command-line arguments ke do formats hain. Dono ka one-to-one mapping hona zaroori nahi hai. Git developers har option ke liye short alias provide karein, ye mandatory nahi hai.

 `Note`
 1. cntl + shift + p
 git comamnd pilot open hota h 
 i used it for a git lens graph

