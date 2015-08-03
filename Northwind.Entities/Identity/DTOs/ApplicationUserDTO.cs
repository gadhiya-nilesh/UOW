﻿using B101Auth.Web.Identity.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Northwind.Entities.Identity.DTOs
{
    public class ApplicationUserDTO
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string PhoneNumber { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public UserProfileInfoDTO UserProfileInfo { get; set; }
    }
}