const messages = {
    ch: {
      message: {
        nav1:'首页',
        nav2:'新闻',
        nav3:'产品',
        nav4:'路线图',
        nav5:'团队',
        nav6:'合作伙伴',
        nav7:'代币销售',
        nav8:'博客',        

        login:'登录/注册',
        home:'首页',
        usechaintitle:'Usechain',
        usechain:'Usechain',
        description:'全球首个隐身镜像区块链生态',
        starttime:'公募 已于 2018-08-08 成功募满，提前结束',
        buyust:'已结束',
        timed:'天', 
        timeh:'小时', 
        timem:'分钟', 
        times:'秒', 
        advantage1:'身份驱动高效共识',
        advantage2:'全新架构安全稳定',
        advantage3:'多重措施隐私保护',
        whitepaper:'白皮书',
        whitepaper1:'项目白皮书',
        whitepaperlink1: '/usechain_cn.pdf',
        whitepaper2:'技术白皮书',
        whitepaperlink2: '/usechain_tech_cn.pdf',
        featureTitle:'产品特点',        
        solutionsTitle:'解决方案',        
        mediaTitle:'媒体报道',
        mapTitle:'路线图',
        videoTitle:'新闻 / 视频',
        partnerTitle:'投资机构 & 合作伙伴',    
        advisorTitle:'顾问团队', 
        tokenTitle:'代币分配方案',
        planTitle:'代币销售计划',         
        subTitle:'私募登记',                       
        work_title:'Usechain全新区块链解决方案',                 
        work_introductin:'首创性引入全新共识机制随机工作量证明RPOW，在兼顾高性能与安全性的同时，结合多层次身份认证及加密机制、零知识证明、身份虚拟机IVM、身份网络分片INS、身份交易分片ITS、增强智能合约等创新技术，打造新一代区块链系统，引领整个区块链行业真正进入3.0时代。',        
        work1:'性能与安全的完美平衡',
        work2:'匿名与实名的完美平衡',
        work3:'技术与应用的完美平衡',
        tokenDescription:'●&nbsp;发行总量: 20,000,000,000 UST<br/>\
        ●&nbsp;UST限量发行<br/>\
        ●&nbsp;代币出售上限: 45%<br/>\
        ●&nbsp;市场&合作伙伴支持: 5% (包含其中的6%用于社区赏金计划)<br/>\
        ●&nbsp;社区激励: 20%<br/>\
        ●&nbsp;技术社区激励: 15%<br/>\
        ●&nbsp;核心团队: 15%<br/>\
        ●&nbsp;软顶: 1350 BTC 或 20000 ETH<br/>\
        ●&nbsp;硬顶: 4500 BTC 或 60000 ETH<br/>\
        ●&nbsp;接受币种: ETH(Ethereum), BTC(Bitcoin)',
        feature1:'基于硬件的性能提升',
        feature2:'隐私安全的身份应用',
        feature3:'无边界的身份生态',
        feature4:'顶级商学院资源注入',
        token1:'销售',
        token2:'市场&合作伙伴支持',
        token3:'社区激励',
        token4:'技术社区激励',
        token5:'核心团队',
        map1:{
          time:'2016年',
          event:'●&nbsp;确定区块链需要以身份为基础<br/>\
          ●&nbsp;研究基于身份的区块链算法<br/>\
          ●&nbsp;提出个性化身份通证概念'
        },
        map2:{
          time:'2017年第一、二季度',
          event:'●&nbsp;确定Usechain设计原则及目标<br/>\
          ●&nbsp;确立Usechain开发规划<br/>\
          ●&nbsp;Usechain项目正式启动'
        },
        map3:{
          time:'2017年第三季度',
          event:'●&nbsp;系统架构和基础协议设计<br/>\
          ●&nbsp;生态整体规划'
        },
        map4:{
          time:'2017年第四季度',
          event:'●&nbsp;底层公有链开发<br/>\
          ●&nbsp;与合作伙伴共同探索区块链应用场景'
        },
        map5:{
          time:'2018年第一季度',
          event:'●&nbsp;底层公有链基本功能开发<br/>\
          ●&nbsp;身份映射系统开发<br/>\
          ●&nbsp;CA认证中心服务'
        },
        map6:{
          time:'2018年第二季度',
          event:'●&nbsp;用户隐私保护功能开发<br/>\
          ●&nbsp;核心社群组建，社区突破5万人'
        },
        map7:{
          time:'2018年第三季度',
          event:'●&nbsp;基于软件的RPOW共识算法开发<br/>\
          ●&nbsp;增强智能合约开发<br/>\
          ●&nbsp;共识算法开发<br/>\
          ●&nbsp;公有链测试版上线<br/>\
          ●&nbsp;核心社区突破10万人<br/>\
          ●&nbsp;首个行业DApp上线'
        },
        map8:{
          time:'2018年第四季度',
          event:'●&nbsp;子链结构搭建<br/>\
          ●&nbsp;跨子链通信开发<br/>\
          ●&nbsp;Usechain生态基金建立，助推行业应用孵化<br/>\
          ●&nbsp;多行业垂直社区建立<br/>\
          ●&nbsp;公有链主网上线'
        },
        map9:{
          time:'2019年',
          event:'●&nbsp;智能地址行为分析<br/>\
          ●&nbsp;通证化多节点体系搭建<br/>\
          ●&nbsp;基于硬件的RPOW共识算法开发<br/>\
          ●&nbsp;大量行业应用接入<br/>\
          ●&nbsp;去中心化交易所上线'
        },
        teamTitle:'核心团队',
        caohuining:{
          name:'曹辉宁',
          staff:'创始人，CEO',
          linkin:'https://www.linkedin.com/in/huiningcao',
          description:'长江商学院金融学教授，金融系主任，中国第一个金融MBA创始人，美国财务学会会员，中国区块链应用研究中心常务理事，曾任教于加州大学伯克利分校,北卡罗来纳大学Chapel Hill分校。13岁考入中国科学技术大学少年班，美国加州大学洛杉矶分校博士、耶鲁大学博士'
        },
        sunbaohong:{
          name:'孙宝红',
          staff:'联合创始人，首席战略官',
          linkin:'https://www.linkedin.com/in/baohongsun',          
          description:'长江商学院市场营销教授，杰出院长讲席教授，美洲市场副院长，前美国卡内基梅隆大学泰伯商学院卡内基-博世营销学讲席教授，美国市场营销学会和美国经济学委员会成员，《市场营销科学》，《市场营销学刊》和《市场营销》等专业学术期刊编委会成员，曾任世界经济论坛未来行为科学理事会理事。中国人民大学本科，美国南加州大学博士'
        },
        zhangshengli:{
          name:'张胜利',
          staff:'首席科学家',
          linkin:'https://www.linkedin.com/in/shengli-zhang-36659184/',          
          description:'资深区块链技术专家，无线网络技术专家，物理层网络编码(Physical layer Network Coding)的提出者。深圳大学信息工程学院教授、区块链研究中心执行副主任，斯坦福大学访问教授，中国科学技术大学学士、硕士，香港中文大学博士。电气和电子工程师协会（IEEE）高级会员，中国电子学会高级成员。拥有3项区块链相关国家发明专利，主持多个区块链科研项目'
        },
        zhangfeng:{
          name:'张峰',
          staff:'资深金融专家',
          linkin:'https://www.linkedin.com/in/feng-zhang1/',          
          description:'国家“千人计划”专家，拥有近三十年国内外量化对冲经验，曾任花旗集团/摩根士丹利资产管理部董事总经理，博时基金管理有限公司股票投资部总经理、数量组、股票成长组投资总监、投资决策委员会成员，交银施罗德基金管理有限公司绝对收益投资总监，量化投资总监，清华大学经管学院第一届毕业生、美国加州大学博士'
        },
        xuzhiwen:{
          name:'徐智文',
          staff:'首席运营官',
          linkin:'https://www.linkedin.com/in/erikxu/',          
          description:'拥有近10年互联网行业、信息安全领域综合管理和市场经验，连续创业者，曾任北京云江科技有限公司副总裁，国家信息安全工程中心信息安全项目负责人，中国“十二五”重点科技攻关项目执行负责人，负责多项国家级信息安全和密钥管理（KMC）工程项目，国家信息安全标准化技术委员会和大数据安全工作组成员，长江商学院工商管理硕士（MBA）'
        },
        zhouhaihan:{
          name:'周海汉',
          staff:'首席技术官',
          linkin:'https://www.linkedin.com/in/ablozhou/',                 
          description:'拥有10多年的技术开发和管理经验，多次创业者，技术能力全面。对大数据处理，人工智能，网络分布式系统，架构设计有较深了解。2015年接触区块链技术，设计去中心化数字货币的形态。早在2005年开始基于P2P通信技术实现去中心化的通信软件和内容社区。此前曾在科大讯飞，华为等担任高级研发工程师职位，在北京荣之联科技有限公司、触控科技等公司担任技术总监职位。本科毕业于中国科学技术大学，双学士学位，中科院硕士。'
        },
        zhaolin:{
          name:'赵林',
          staff:'首席产品官',
          linkin:'https://www.linkedin.com/in/neil-zhao-8b56a315b/',          
          description:'拥有近10年互联网、新零售领域，多个大型综合电商、O2O、开放平台构建经验，覆盖从上游供应链到末端消费者，从垂直电商到无人便利新零售的整个消费生态圈，消费服务生态产品专家；曾任腾讯控股综合移动电商平台技术总监、中国领先O2O社区电商“爱鲜蜂”首席产品专家'
        },
        shenhui:{
          name:'沈慧',
          staff:'首席市场营销官',
          linkin:'https://www.linkedin.com/in/Amandashenhui',          
          description:'12年公关和营销经验，曾任联邦快递中国营销战略经理，北京信融君悦房地产顾问有限公司营销总监，长江商学院工商管理硕士（MBA）'
        },
        songgengnan:{
          name:'宋庚男',
          staff:'全球社区运营',
          linkin:'https://www.linkedin.com/in/emeisy-song-745098163/',          
          description:'拥有近10年互联网、社区运营和商务经验。8年腾讯社区运营经验，涵盖从早期PC端社区产品Discuz！到移动互联网腾讯微社区、腾讯兴趣部落等社区产品。中国知名餐饮服务赞赏平台“爱赞赏”商务总监。'
        },
        zhangliang:{
          name:'张亮',
          staff:'架构师',
          linkin:'https://www.linkedin.com/in/%E4%BA%AE-%E5%BC%A0-95067015a/',          
          description:'拥有多年的数字货币交易所和区块链开发经验，曾任微比特虚拟货币交易所和直布罗陀国家区块链交易所高级研发工程师。15年开始接触区块链项目，并对目前的主流的区块链技术进行过深入的研究与探索。中国科学技术大学硕士。'
        },
        luliang:{
          name:'卢亮',
          staff:'资深顾问',
          linkin:'#',   
          description:'资深区块链专家，5Miles创始人兼CEO，全球第一个电商公链Cybermiles（CMT）创始人兼CEO，曾任兰亭集势（LITB）联合创始人兼首席技术官、手机淘宝首任总经理、华数淘宝总经理，中国科学技术大学学士，南卫理公会大学（SMU）粒子物理学博士'
        },
        caoyin:{
          name:'曹寅',
          staff:'资深顾问',
          linkin:'#',   
          description:'2015年开始在国内研究推广区块链应用，能源互联⽹概念在中国的最早提出者之⼀，全球第一家能源区块链实验室创始合伙人，信达证券首席区块链专家，爱沙尼亚E-Residency的早期成员，Hyperledger Project中国工作组主要成员'
        },
        weishangjin:{
          name:'魏尚进',
          staff:'资深顾问',
          linkin:'#',   
          description:'哥伦比亚大学金融学经济学教授，国际事务教授，中国商务与经济学教授；2014-2016,，担任亚洲开发银行首席经济学家和经济研究与区域合作总负责人；2011-2014，哥伦比亚商学院查森国际工商研究院主任；经济政策研究中心研究员；美国外交关系协会成员；美国布鲁金斯研究所高级研究员、美国国民经济研究局中国经济研究组主任'
        },
        maqian:{
          name:'马谦',
          staff:'资深顾问',
          linkin:'#',   
          description:'北京商询科技有限公司（DataMesh）创始人/总裁，中促会大数据发展委员会主任，上海品赋投资管理有限公司创始人/执行董事，原东方汇富副总裁/投资总监，中国创新创业大赛决赛评委、黑马大赛年度总决赛评委'
        },
        yanfangjun:{
          name:'闫方军',
          staff:'资深顾问',
          linkin:'#',   
          description:'资深互联网商业专家，易传媒集团（AdChina）董事会主席兼CEO，悟空和Lakeshore创始人，麻省理工学院高层管理人员工商管理硕士（EMBA）'
        },
        zhushengqing:{
          name:'朱晟卿',
          staff:'资深顾问',
          linkin:'#',   
          description:'Distributed Credit Chain创始人兼首席执行官。成功创办多家互联网和金融科技公司的企业家，曾任同牛科技CEO，带领团队将其一手打造成中国领先的消费金融SaaS系统服务商，每年帮助信托公司发放的贷款额迖数十亿美元资深学者，拥有牛津大学金融经济学硕士、耶鲁大学统计学硕士及南京大学统计学硕士及工程学士学位。'
        },
        yujianfeng:{
          name:'余剑锋',
          staff:'资深顾问',
          linkin:'#',   
          description:'中国“千人计划”专家，宾夕法尼亚大学沃顿商学院博士，耶鲁大学硕士。现为清华大学五道口金融学院建树金融学讲席教授，清华大学国家金融研究院资产管理研究中心主任，曾任明尼苏达大学卡尔森管理学院Piper Jaffray讲席教授，香港中文大学（深圳）经管学院执行副院长。自2011年起任美国联邦储蓄银行（达拉斯）的研究员。主要从事行为金融和宏观金融的理论和实证研究，其研究成果曾获得多项奖项，其中包括Smith-Breeden一等奖。'
        },
        caofeng:{
          name:'曹峰',
          staff:'资深顾问',
          linkin:'#',   
          description:'PCHAIN发起人，中国第一个区块链国际专利发明人，ChinaLedger共同发起人，CFLP中物联区块链协会首席科学家。他和团队成功完成全球第一笔区块链资产收益权转让暨中国第一笔区块链金融真实交易并获多项区块链金融创新大奖。他曾担任IBM全球下一代人机大战中国区负责人, 互联网金融首席科学家，专利评审委员会联合主席。他的创新成果已成功应用于中、美等150多个国家，曾3次获得IBM全球杰出技术成就奖，发表22篇国际顶级论文，30余项美国专利，并担任多个ACM IEEE顶级国际会议论坛主席。'
        },
        copyright:'Copyright © 2018 UseChain Foundation LTD',
        userteams:'用户条款',
        privacy:'隐私政策',
        tokenagreement:'代币购买协议',  
        termsheet:'条款说明',
        time1:'基石',
        time2:'私募',
        time3:'公募',
        done:'已完成',
        privatesale:'私募',        
        plan:'登陆交易所前解锁25%，之后每两个月解锁25%，6个月内全部解锁',
        nolockup:'不锁仓',
        subscribe:'订阅',
        subsuccess:'订阅成功',
        suberror:'您已订阅过',
        emailerror:'请输入正确的邮箱地址',
      }
    },
    en: {
      message: {
        nav1:'Home',        
        nav2:'News',        
        nav3:'Products',
        nav4:'Roadmap',
        nav5:'Team',
        nav6:'Partners',
        nav7:'Token Sale',
        nav8:'Blog',

        login:'loginIn/signUp',  
        home:'Home',        
        usechaintitle:'USECHAIN',
        usechain:'Usechain',
        description:'THE FIRST MIRROR IDENTITY BLOCKCHAIN',
        starttime:'Public sale ended on 8th August 2018 successfully.',
        buyust:'Ended',       
        timed:'Days', 
        timeh:'Hours', 
        timem:'Minutes', 
        times:'Seconds', 
        advantage1:'ID-Enabled Consensus',
        advantage2:'ID-Enabled Security',
        advantage3:'ID-Enabled Privacy',
        whitepaper:'Whitepaper',        
        whitepaper1:'Project Whitepaper',
        whitepaperlink1:'/usechain_en.pdf',
        whitepaper2:'Technical Whitepaper',
        whitepaperlink2: '/usechain_tech_en.pdf',
        featureTitle:'Product Features',
        solutionsTitle:'Solutions',        
        mediaTitle:'Media Coverage',
        mapTitle:'RoadMap',
        videoTitle:'News / Videos',
        partnerTitle:'Investors & Partners', 
        advisorTitle:'Advisors',    
        tokenTitle:'Token Distribution',   
        planTitle:'Token Sale Plan',  
        subTitle:'Private Sale Registration',               
        work_title:'Usechain Innovative Blockchain Solutions',   
        work_introductin:'Introduce a brand-new consensus mechanism, Randomized Proof of Work to perfectly balance high performance and strong security, and apply multi-level authentication and encryption mechanism, Zero Proof, Identity Virtual Machine (IVM), Identity Network Sharding (INS), Identity Transaction Sharding (ITS), Enhanced Smart Contract, and other innovative technologies to create a new generation of Blockchain, leading Blockchain 3.0.',
        work1:'Performance and Security Balance',
        work2:'Anonymity and Identity Balance',
        work3:'Technology and Application Balance',
        tokenDescription:'●&nbsp;Volume: 20,000,000,000 UST<br/>\
        ●&nbsp;Finite amount of UST created<br/>\
        ●&nbsp;Maximum token amount for sale: 45%<br/>\
        ●&nbsp;Marketing & Partner Support: 5% (with bounty comprising 6%)<br/>\
        ●&nbsp;Community Rewards: 20%<br/>\
        ●&nbsp;Technical Community Rewards: 15% <br/>\
        ●&nbsp;Core Team: 15%<br/>\
        ●&nbsp;Softcap: 1350 BTC  or  20000 ETH<br/>\
        ●&nbsp;Hardcap: 4500 BTC  or  60000 ETH<br/>\
        ●&nbsp;ETH(Ethereum), BTC(Bitcoin)',
        feature1:'Hardware-Based Performance Improvement',
        feature2:'Privacy-Protected Identity Application',
        feature3:'Boundaryless Identity Ecosystem',
        feature4:'Top Business School Supported',
        token1:'For Sale',
        token2:'Marketing & Partner Support ',
        token3:'Community Rewards',
        token4:'Technical Community Rewards',
        token5:'Core Team',
        map1:{
          time:'2016',
          event:"●&nbsp;Determine identity-based blockchain.<br/>\
          ●&nbsp;Research on algorithm of identity-based blockchain.<br/>\
          ●&nbsp;Put forward the concept of identity tokenization."
        },
        map2:{
          time:'Q1&Q2 2017',
          event:'●&nbsp;Determine design principles and objectives.<br/>\
          ●&nbsp;Compile development plan.<br/>\
          ●&nbsp;Officially launch the Usechain project.'
        },
        map3:{
          time:'Q3 2017',
          event:'●&nbsp;Design system architecture and basic protocol.<br/>\
          ●&nbsp;Integrated planning of ecosystem.<br/>'
        },
        map4:{
          time:'Q4 2017',
          event:'●&nbsp;Develop underlying public blockchain.<br/>\
          ●&nbsp;Cooperate with partners to explore application scenarios.'
        },
        map5:{
          time:'Q1 2018',
          event:'●&nbsp;Develop fundamental functions of underlying public blockchain.<br/>\
          ●&nbsp;Develop address-identity mapping system.<br/>\
          ●&nbsp;Certification Authentication Center Service.'
        },
        map6:{
          time:'Q2 2018',
          event:'●&nbsp;Develop privacy protection system.<br/>\
          ●&nbsp;Form core community and achieve 50000+ people.'
        },
        map7:{
          time:'Q3 2018',
          event:'●&nbsp;Develop software-based RPOW consensus algorithm.<br/>\
          ●&nbsp;Develop enhanced smart contracts.<br/>\
          ●&nbsp;Develop consensus algorithm.<br/>\
          ●&nbsp;Usechain testnet release.<br/>\
          ●&nbsp;Achieve 100000+ people in the community.<br/>\
          ●&nbsp;Launch the first DApp.'
        },
        map8:{
          time:'Q4 2018',
          event:'●&nbsp;Set up sub-chain structure.<br/>\
          ●&nbsp;Develop cross sub-chain communication.<br/>\
          ●&nbsp;Build Usechain eco-fund to accelerate ecosystem development.<br/>\
          ●&nbsp;Develop multi-industry vertical community.<br/>\
          ●&nbsp;Usechain mainnet release.'
        },
        map9:{
          time:'2019',
          event:'●&nbsp;AI system of address behavior analysis.<br/>\
          ●&nbsp;Develop tokenized multi-node system.<br/>\
          ●&nbsp;Develop hardware-based RPOW consensus algorithm.<br/>\
          ●&nbsp;More multi-industry identity-based DApps.<br/>\
          ●&nbsp;Launch decentralized exchange.'
        },
        teamTitle:'Core Team',
        caohuining:{
          name:'Henry CAO',
          staff:'Founder,CEO',
          linkin:'https://www.linkedin.com/in/huiningcao',          
          description:"Finance Professor at Cheung Kong Graduate School of Business, Head of the Department of Finance, Founder of the first Finance MBA program in China, Member of the Finance Society of America. Managing director of China Blockchain Application  Research Lab, taught at the University of California at Berkeley, the University of North Carolina, Chapel Hill, admitted to the USTC gifted class when he was 13 years old, Yale University/ UCLA PhDs."
        },
        sunbaohong:{
          name:'Baohong SUN',
          staff:'Co-founder, CSO',
          linkin:'https://www.linkedin.com/in/baohongsun',          
          description:'Marketing Professor at Cheung Kong Graduate School of Business, Dean’s Distinguished Chair Professor of Market, Associate Dean, Former Chaired Professor at Tepper Business School, Carnegie Mellon University, editorial board member of "Marketing Science", "Journal of Marketing" and "Journal of Marketing Research", The world economic forum on future behavior, Renmin University of China, BS, USC PhD.'
        },
        zhangshengli:{
          name:'Shengli ZHANG',
          staff:'Chief Scientist',
          linkin:'https://www.linkedin.com/in/shengli-zhang-36659184/',          
          description:'Senior blockchain specialist, wireless network technologist, presenter of Physical Layer Network Coding, Professor of Shenzhen University, Vice Director of the SZU Blockchain Research Institiute, Visiting Professor at Stanford University, IEEE Senior Member, Senior member of China electronics society, Holder of 3 national invention patents of blockchain, USTC BS & MS, CUHK PhD'
        },
        zhangfeng:{
          name:'Feng ZHANG',
          staff:'Senior Financial Specialist',
          linkin:'https://www.linkedin.com/in/feng-zhang1/',                  
          description:'"Thousand Talents" Expert, near 30 years of experience in QIHF globally, MD of Asset Management Dept of Citigroup/ Morgan Stanley, GM of Stock Investment Dept of Bosera Funds, Investment Director of BoCom-Schroders Fund, Tsinghua BS, UC Irvine, PhD.'
        },
        xuzhiwen:{
          name:'Erik XU',
          staff:'COO',
          linkin:'https://www.linkedin.com/in/erikxu/',                 
          description:'Near 10 years of experience in Internet and information security industry in General Management and Marketing, Serial entrepreneur, Served as Vice President for Beijing YunJiang Technology Limited, Head of information security project at National Information Security Engineering Center, Executive Director of the National Key Technology R&D program during the 12th Five-year Plan Period, responsible for a number of national information security and key manage center (KMC) projects, Member of National Information Security Standardization Technical Committee and Big Data Working Group, MBA from Cheung Kong Graduate School of Business.'
        },
        zhouhaihan:{
          name:'Andy ZHOU',
          staff:'CTO',
          linkin:'https://www.linkedin.com/in/ablozhou/',                   
          description:"More  than ten years of technical development experience.  Multiple entrepreneurs,  having comprehensive technical ability. Have a deep understanding of big data processing, AI,  distributed  network system and architecture design. In 2015, touched block chaining technology and designed the form of centralization of digital currency. As early as 2005, designed  and  architected  decentralized communication software and content communities  based on P2P communication technology.\
          Previously in iFLYTEK, HUAWEI acted as senior research and development Engineer,  In Beijing United Electronics Co. and ChuKong Tech.  served as  Technical Director.  Double bachelor's degree from University of Science and Technology of China (USTC) and MS from Chinese Academy of Sciences (CAS)."
        },
        zhaolin:{
          name:'Lin ZHAO',
          staff:'CPO',
          linkin:'https://www.linkedin.com/in/neil-zhao-8b56a315b/',          
          description:'Near 10 years of experience in Internet and new retail industry, experienced in platform building for horizontal e-commerce, O2O, Eco-friendly product and service specialist, Chief Product Manager of the leading O2O E-commerce Bee Quick.'
        },
        shenhui:{
          name:'Amanda SHEN',
          staff:'CMO',
          linkin:'https://www.linkedin.com/in/Amandashenhui',          
          description:'Public Relation and marketing experience for 12 years, Marketing Strategy Manager of FedEx China, Marketing Director of Beijing XinRongJunYue real estate consultants LTD, MBA from Cheung Kong Graduate School of Business.'
        },
        songgengnan:{
          name:'Gengnan SONG',
          staff:'Global Community Developer',
          linkin:'https://www.linkedin.com/in/emeisy-song-745098163/',          
          description:'Nearly 10 years of professional experience in Internet, community operations and business. Over 8 years of community operations expereince at Tencent, covering products from early stage PC community product Discuz! to Tencent micro-communities on mobile Internet and Tencent Interest Tribes. She is the former Business Director at a well-known platform for evaluating catering services in China.'
        },
        zhangliang:{
          name:'Liang ZHANG',
          staff:'Technical Architect',
          linkin:'https://www.linkedin.com/in/%E4%BA%AE-%E5%BC%A0-95067015a/',          
          description:'Many years of experience in digital currency exchanges and blockchain development. He is the former Senior R&D Engineer at Microbit Cryptocurrency Exchange and the Gibraltar National Blockchain Exchange. He started to participate in blockchain projects since 2015, and he has had deep research of the current mainstream blockchain technology.'
        },
        luliang:{
          name:'Lucas LU',
          staff:'Senior Advisor',
          linkin:'#',   
          description:'Senior expert of Blockchain, Founder & CEO of 5Miles, Founder & CEO of Cybermiles (CMT), Served as Co-Founder & CTO for Lightinthebox (LITB), the first GM of Moible Taobao, China University of Science and Technology BS, SMU PhD.'
        },
        caoyin:{
          name:'Yin CAO',
          staff:'Senior Advisor',
          linkin:'#',   
          description:'Started to do research and promote blockchain application in 2015, was among the first to propose the concept of Energy Internet in China, Co-founder of the first Energy-Blockchain Lab in the world, Chief Blockchain Expert of Cinda Securities Co.,Ltd, Former member of E-residency of Estonia, Major member of the Technical Working Group China of Hyperledger Project.'
        },
        weishangjin:{
          name:'Shangjin WEI',
          staff:'Senior Advisor',
          linkin:'#',   
          description:'Professor of Finance and Economics, Professor of International Affairs, and N.T. Wang Professor of Chinese Business and Economy, Columbia University, Chief Economist and Director General of Economic Research and Regional Cooperation, Asian Development Bank, 2014-2016, Director, The Jerome A. Chazen Institute of International Business, Columbia Business School, 2011-2014, Research Associate, National Bureau of Economic Research (NBER), Research Fellow, Center for Economic Policy Research (CEPR), Member, Council on Foreign Relations Non-resident Senior Fellow, The Brookings Institution Director, NBER Working Group on the Chinese Economy.'
        },
        maqian:{
          name:'Qian MA',
          staff:'Senior Advisor',
          linkin:'#',   
          description:'Founder & President of DataMesh, Chairman of Central Big Data Development Committee, Founder/Director of Shanghai Pingfu Asset Management, Former Vice President of Fortune Link Venture Capital Co., Ltd, Over 10 years of experience in investment and business management.'
        },
        yanfangjun:{
          name:'Allen YAN',
          staff:'Senior Advisor',
          linkin:'#',   
          description:'Senior Internet Business Specialist, Chairman of the Board & CEO of AdChina, Founder of Lakeshore, Served for E-bay, Philips, and Alcatel-Lucent, MIT EMBA.'
        },
        zhushengqing:{
          name:'Stewie Zhu',
          staff:'Senior Advisor',
          linkin:'#',   
          description:'Founder & CEO, Distributed Credit Chain. Serial entrepreneur in the internet and Fintech industry. He led a team to develop internet-based credit systems for over a dozen of trusts with multibillion USD annual loan facilitation amount. Ph.D. candidate in Finance at The London School of Economics and Political Science with research focus on finance and cryptoeconomics. MS in Financial Economics from Oxford University, MS in Statistics from Yale University, and MA in Statistic as well as bachelor’s degree in Electrical Engineering from Nanjing University.'          
        },
        yujianfeng:{
          name:'Jianfeng YU',
          staff:'Senior Advisor',
          linkin:'#',   
          description:'China National "Thousand Talents" Expert, PhD of the Wharton School at University of Pennsylvania. Master of Yale University. Current chair professor of finance in Tsinghua PBCSF. Director of financial asset management research center in National Finance Research Institute in Tsinghua University. Former chair professor of Carlson School of Management at University of Minnesota. Executive assistant dean of Economics and Management at The Chinese University of Hong Kong,Shen zhen.Researcher at the Federal Reserve Bank Dallas since 2011. Mainly engaged in  the theoretical and empirical research on behavioral finance and macro-finance. Research results achieved many awards, including the First Prize of Smith-Breeden.'
        },
        caofeng:{
          name:'Jeff CAO',
          staff:'Senior Advisor',
          linkin:'#',   
          description:'PChain Founder. The inventor of the 1st International Blockchain patent from China, the Co-Founder of ChinaLedger, the most influential blockchain alliance of China.The Chief Scientist of Blockchain Application Committee in China Federation of Logistic and Purchasing (The 1st Gov Association in Industry), the Senior Fellow of the China Blockchain Research Alliance.Successfully accomplished the 1st blockchain based assets earning rights transfer in the world in September 2016, which is also the 1st Financial Blockchain Transaction in China.Ex-Chief Scientist of Internet Finance and cochair of the patent review board in IBM Research China，IBM Global Technical Achievement Awards three times.22 papers in ACM/IEEE top conference and 30+ international patents.'
        },
        copyright:'Copyright © 2018 UseChain Foundation LTD',
        userteams:'Terms of User',
        privacy:'Privacy Policy',
        tokenagreement:'Token Purchase Agreement',    
        termsheet:'Term Sheet',    
        time1:'Cornerstone',
        time2:'Private Sale',
        time3:'Public Sale',
        done:'Done',        
        privatesale:'Private Sale',
        plan:'25% unlocked before exchange listing, 25% unlocked every 2 months thereafter, with total unlocked in 6 months',
        nolockup:'No Lockup',
        subscribe:'Subscribe',
        subsuccess:'Thank you for your Subscription.',
        suberror:'You have already subscribed.',       
        emailerror:'Please enter your email.', 
      }
    },
  };

  export default messages;
